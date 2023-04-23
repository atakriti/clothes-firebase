import React, { useContext, useState } from 'react'
import { context } from '../Context';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { doc,updateDoc } from "firebase/firestore"
import { db } from '../firebase';
import "./checkout.scss"
import { useNavigate } from 'react-router-dom';
function Checkout() {
    let { findUser, isCheckout, setIsCheckout,setLoading } = useContext(context);
    let navigate = useNavigate()
    let [isPayment, setIsPayment] = useState(1)
    let [addressValue, setAddressValue] = useState({
        street: "",
        city: "",
        country: "",
        phone:""
    })
    let handleChangeAd = (e) => {
        setAddressValue({...addressValue,[e.target.name]:e.target.value})
    }
    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // adding new property to the object
            let theUser = doc(db, "users", findUser?.id)
      setLoading(true)

            await updateDoc(theUser, {
                street: addressValue.street,
                city: addressValue.city,
                country: addressValue.country,
                phone: addressValue.phone,
                cart:[]
            })
      setLoading(false)

            setIsCheckout(false)
            navigate("/")
        } catch (error) {
            alert(error.message)
          setLoading(false)
            
        }
    }



    let handleDone1 = (e) => {
        e.preventDefault()
        if (addressValue.street !== "" && addressValue.city !== "" && addressValue.country !== "" && addressValue.phone !== "") {
            setIsPayment(2)
        } else {
            alert("Please fill out the form")
        }
}

    
    // This if the user has already an address info
    let handleDone2 = async (e) => {
        e.preventDefault()
        let theUser = doc(db, "users", findUser?.id)
        try {
            setLoading(true)
            await updateDoc(theUser, { cart: [] })
          setLoading(false)
            
            setIsCheckout(false)
            navigate("/")
        } catch (error) {
            alert(error.message)
          setLoading(false)

        }
     
    }
  return (
      <div className='checkout'>
          {isPayment === 1 && (
              findUser?.street === undefined ? (
                <form onChange={handleChangeAd}>
                <h1>Address Infos</h1>
                <h2>Hi { findUser.displayName}</h2>
                <input required placeholder='Street and house Nr.' type="text" name="street" value={addressValue.street} />
                <input required placeholder='City and zip code...' type="text" name="city" value={addressValue.city} />
                <input required placeholder='Country...' type="text" name="country" value={addressValue.country} defaultValue={"Germany"} />
                <input required placeholder='Phone Nr.' type="text" name="phone" value={addressValue.phone} />
                <button onClick={handleDone1}>Proceed to payment</button>
                <button onClick={() => setIsCheckout(false)}>Cancel</button>
            </form>
              ) : (
                      <form>
                          {/* If the user has already address infos */}
                <h3>Thank you for visiting my website. <br /> This website is a Demo, so you are not able to have a real payment</h3>
                  <button onClick={handleDone2}>Done</button>
              </form> 
              )
             
          )}
          {isPayment === 2 && (
              
              <form >
                <h3>Thank you for visiting my website. <br /> This website is a Demo, so you are not able to have a real payment</h3>
                  <button onClick={handleSubmit}>Done</button>
                  <button onClick={() => setIsPayment(1)}>Back</button>
              </form>
          )}

          
    </div>
  )
}

export default Checkout