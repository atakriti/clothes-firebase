import React, { useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import "./register.scss";
import { auth, googleProvider,db } from "../firebase"
import {addDoc,collection} from "firebase/firestore"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup,updateProfile,onAuthStateChanged} from "firebase/auth"
function Register() {
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
      await signInWithEmailAndPassword(auth, signinValue.emailSi, signinValue.passwordSi)
      setSigninValue({
        emailSi: "",
        passwordSi: ""
      })
    } catch (error) {
      alert(error.message)
    }
  }
  let handleSignup = async (e) => {
    e.preventDefault()
    try {
      // method on the User object returned by the createUserWithEmailAndPassword()
      const {user} = await createUserWithEmailAndPassword(auth, signupValue.emailSu, signupValue.passwordSu);
      await updateProfile(user, { displayName: signupValue.displayName });
      await addDoc(userCollection, {
        email: signupValue.emailSu,
        displayName:signupValue.displayName,
        cart:[]
      })
      setSignupValue({
        emailSu: "",
        passwordSu: "",
        displayName:""
      })
      
    } catch (error) {
      alert(error.message)
    }
  }
  let hangleGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      if (user.email === undefined) {
        // Add the user to the userCollection
        await addDoc(userCollection, {
          email: user.email,
          displayName: user.displayName,
          cart: [],
        });
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="register">
      <div className="register-container">
        {/* Sign in */}
        {switchRegister === 1 && (
          <form onChange={handleChangeSignin} onSubmit={handleSignin} >
            <h1>Sign in</h1>
            <input placeholder="E-Mail..." type="email" name="emailSi" value={signinValue.emailSi} />
            <input placeholder="Password... (Min 6 character)" type="password" name="passwordSi" value={signinValue.passwordSi} />
            <button>Sign in</button>
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
          <GoogleButton onClick={hangleGoogle} />
        </div>
      </div>
    </div>
  );
}

export default Register;
