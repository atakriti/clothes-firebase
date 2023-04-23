import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/clothes-logo.png"
import { BiUser } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import "./header.scss"
import { context } from '../Context'
function Header() {
    let { findUser, user } = useContext(context)
    // window.location.pathname
  return (
      <header>
          <div className="logo">
              <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <nav>
              <ul>
                  {/* Links */}
                  <Link to="/">Home</Link>
                  <Link to="/shop">Shop</Link>
                  <Link to="/sale">Sale%</Link>
                 
              </ul>
              <span>
                  {/* User */}
                  {/* user.photoURL */}
                  {user ? (
                      <>
                      <Link to="/register">{user?.photoURL !== null ? (<img src={user?.photoURL} alt="" />) : (<BiUser />)}<h3>{ findUser?.displayName}</h3></Link>
                      {/* <Link to="/register"><img src={"https://lh3.googleusercontent.com/a/AGNmyxZ9q5BxwRey7ggoe8F6ndOwotN0L9s-_RE7i9gC=s96-c"} alt="" /><h3>{ findUser?.displayName}</h3></Link> */}
                  <Link to="/cart"><BsCart2 /><h3>{ findUser?.cart?.length}</h3></Link>
                    
                      </>
                  ): (
                    <Link className='login-btn' to="/register">Login</Link>
                  )}
              </span>
          </nav>
    </header>
  )
}

export default Header