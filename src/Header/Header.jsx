import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/clothes-logo.png"
import { BiUser } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import "./header.scss"
function Header() {
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
                  <Link to="/register"><BiUser/><h3>Anwar</h3></Link>
                  {/* cart */}
                  <Link to="/cart"><BsCart2/><h3>3</h3></Link>
              </span>
          </nav>
    </header>
  )
}

export default Header