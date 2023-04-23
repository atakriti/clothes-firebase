import React, { createContext, useEffect, useState } from 'react'
import { auth,db } from "./firebase"
import {onSnapshot,collection} from "firebase/firestore"
import {onAuthStateChanged} from "firebase/auth"
export let context = createContext()
function Context({ children }) {
    let [user, setUser] = useState()
    let [isCheckout,setIsCheckout] = useState(false)
    let [users, setUsers] = useState()
 
    let userCollection = collection(db, "users")
    let findUser = users?.find(item => item?.email === user?.email)
    let fetchingUsers = async () => {
        await onSnapshot(userCollection, (snapshot) => {
                setUsers(snapshot.docs.map(doc => ({...doc.data(),id:doc.id})))
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (current) => setUser(current))
        fetchingUsers()
    }, [])
    
  return (
      <context.Provider value={{user, setUser,users,findUser,isCheckout,setIsCheckout}}>{ children}</context.Provider>
  )
}

export default Context