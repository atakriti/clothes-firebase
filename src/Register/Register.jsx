import React, { useContext, useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import "./register.scss";
import { auth, googleProvider,db } from "../firebase"
import {addDoc,collection} from "firebase/firestore"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup,updateProfile,onAuthStateChanged} from "firebase/auth"
import { context } from "../Context";
import { useNavigate } from "react-router-dom";
function Register() {
  let { findUser, user,users,setLoading } = useContext(context)
  let navigate = useNavigate()

  // Firebase
  let userCollection = collection(db,"users")
  // end firebase
  let [switchRegister, setSwitchRegister] = useState(1);
  let [signinValue, setSigninValue] = useState({
    emailSi: "",
    passwordSi: "",
  });
  let [signupValue, setSignupValue] = useState({
    emailSu: "",
    passwordSu: "",
    displayName:""
  });
  let handleChangeSignin = (e) => {
    setSigninValue({ ...signinValue, [e.target.name]: e.target.value });

  };
  let handleChangeSignup = (e) => {
    setSignupValue({ ...signupValue, [e.target.name]: e.target.value });
  };
  // =======================
  let handleSignin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, signinValue.emailSi, signinValue.passwordSi)
      setLoading(false)

      setSigninValue({
        emailSi: "",
        passwordSi: ""
      })
      navigate("/")

    } catch (error) {
      alert(error.message)
      setLoading(false)
    }
  }
  let handleSignup = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      // method on the User object returned by the createUserWithEmailAndPassword()
      const { user } = await createUserWithEmailAndPassword(auth, signupValue.emailSu, signupValue.passwordSu);
      navigate("/")
      // This update profile, is update the property which is in the user object which is proveded from firebase and it update it originaly, Console.log the user to more understand
      await updateProfile(user, { displayName: signupValue.displayName });
      await addDoc(userCollection, {
        email: signupValue.emailSu,
        displayName:signupValue.displayName,
        cart:[]
      })
      setLoading(false)

      setSignupValue({
        emailSu: "",
        passwordSu: "",
        displayName:""
      })
      
    } catch (error) {
      alert(error.message)
    }
  }
  let handleGoogle = async () => {
    try {
      setLoading(true)
      const { user } = await signInWithPopup(auth, googleProvider);
      if (users?.some(item => item?.email === user?.email)) {
        navigate("/")  
        setLoading(false)
      } else {
        await addDoc(userCollection, {
          email: user.email,
          displayName: user.displayName,
          cart: [],
        });
      setLoading(false)

      navigate("/")
      }
    
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="register">
      <div className="register-container">

        {user ? (
          <>
            <form>
          <button onClick={() => signOut(auth)}>Logout</button>
            </form>
          </>
        ) : (
            <>
             {/* Sign in */}
        {switchRegister === 1 && (
          <form onChange={handleChangeSignin} onSubmit={handleSignin} >
            <h1>Login</h1>
            <input placeholder="E-Mail..." type="email" name="emailSi" value={signinValue.emailSi} />
            <input placeholder="Password... (Min 6 character)" type="password" name="passwordSi" value={signinValue.passwordSi} />
            <button>Login</button>
            <h4 onClick={() => setSwitchRegister(2)}>Don't have an account?</h4>
          </form>
        )}
        {/* Sign up */}
        {switchRegister === 2 && (
          <form onChange={handleChangeSignup} onSubmit={handleSignup} >
            <h1>Sign up</h1>
            <input placeholder="Username..." type="text" name="displayName" value={signupValue.displayName} />
            <input placeholder="E-Mail..." type="email" name="emailSu" value={signupValue.emailSu} />
            <input placeholder="Password... (Min 6 character)" type="password" name="passwordSu" value={signupValue.passwordSu} />
            <button>Sign up</button>
            <h4 onClick={() => setSwitchRegister(1)}>
              Already have an account?
            </h4>
          </form>
        )}

        <div className="googleBtn">
          <GoogleButton onClick={handleGoogle} />
        </div>
            </>
    )}

       
      </div>
    </div>
  );
}

export default Register;
