import React, { useState,useContext } from 'react'
import { useParams , useNavigate } from 'react-router-dom'
import { updateDoc,doc,getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import {data} from "../data"
import "./single.scss"
import { context } from '../Context'
function Single() {
  let navigate = useNavigate()
    let { id } = useParams()
  let findProductId = data.find(item => item?.id === Number(id))
  let [quantity, setQuantity] = useState(1)
  let [size, setSize] = useState(findProductId.size)
  let finalProduct = {...findProductId,quan:quantity,size:size}
  let {findUser,user} = useContext(context)
  console.log("🚀 ~ file: Single.jsx:15 ~ Single ~ findUser:", findUser)
  // ====================================================
  let handleMinus = () => {
    if (quantity < 2) {
      return;
    }
    setQuantity(quantity - 1)
  }
  // ===================== Add
  let handleAddProduct = async () => {
    let loggedinUser = doc(db, "users", findUser?.id);
  
    try {
      const docSnapshot = await getDoc(loggedinUser); // First get the whole document
      const currentCart = docSnapshot.get("cart") || []; // Second get into property inside the document
      if (currentCart.some(item => item.id === findProductId.id)) {
        let newItem = currentCart.map(item => item.id === findProductId.id ? { ...item, quan: item.quan + quantity,size:size } : item)  
        await updateDoc(loggedinUser, { cart: newItem });
        setQuantity(1)
        return;
      }
  
      const newCart = [...currentCart, finalProduct];
  
      await updateDoc(loggedinUser, { cart: newCart });
      setQuantity(1)

    } catch (error) {
      alert(error.message);
    }
  }
  return (
      <div className='single'>
          <div className="single-container">
              <a><img src={findProductId?.img} alt="" /></a>
              <span>
          <h1>{findProductId.name}</h1>
          {findProductId.sale === undefined ? (
          <h3>Price: { findProductId.price}€</h3>
          ) : (
              <>
            <h3>Sale {findProductId.sale}%</h3>
            <h3>{ findProductId.price - findProductId.price * findProductId.sale / 100}€</h3>
            <h3 style={{ textDecoration: "line-through red", color: "red" }}>{findProductId.price}€</h3>
                <h3>Price: {findProductId.price}€</h3>
                </>
          )}
        
                  {/* ============= */}
                  {findProductId.type.includes("clothes") && 
                     <>
                          <h3>Select The size</h3>
                          <select onChange={(e) => setSize(e.target.value)}  >
                            <option  value="" >Select</option>
                          <option selected defaultChecked value="S">S</option>
                          <option  value="M">M</option>
                          <option  value="L">L</option>
                              
                          </select>
                     </>
                      }
                      {/* ======================= */}
                      {findProductId.type.includes("shoes") && findProductId.gender.includes("man") &&
                     <>
                          <h3>Select The size</h3>
                          <select onChange={(e) => setSize(e.target.value)} >
                            <option  value="" >Select</option>
                          <option selected defaultChecked value="38">38</option>
                          <option  value="40">40</option>
                          <option  value="42">42</option>
                              
                          </select>
                     </>
                      }
                      {/* ====================== */}
                      {findProductId.type.includes("shoes") && findProductId.gender.includes("women") &&
                     <>
                          <h3>Select The size</h3>
                          <select onChange={(e) => setSize(e.target.value)} >
                            <option  value="" >Select</option>
                          <option selected defaultChecked value="38">38</option>
                          <option  value="40">40</option>
                          <option  value="42">42</option>
                              
                          </select>
                     </>
                      }
                      {/* ===================== */}
                      {findProductId.type.includes("shoes") && findProductId.gender.includes("kids") && 
                     <>
                          <h3>Select The size</h3>
                          <select onChange={(e) => setSize(e.target.value)} >
                            <option  value="" >Select</option>
                          <option selected defaultChecked value="18">18</option>
                          <option  value="20">20</option>
                          <option  value="22">22</option>
                              
                          </select>
                     </>
                    }

                      {/* ============= */}
                  <div className="single-btns">
                      <button onClick={handleMinus}>-</button>
                        <h5>{quantity}</h5>
                      <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          {user ? (
          
            <button onClick={handleAddProduct}>Add to cart</button>
          ): (
            <button onClick={() => navigate("/register")} >Login</button>  
          )}
              </span>
            </div>
      </div>
  )
}

export default Single