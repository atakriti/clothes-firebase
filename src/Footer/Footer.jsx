import React from 'react'
import "./footer.scss"
import { BsGithub } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import {FcAndroidOs} from "react-icons/fc"
function Footer() {
  return (
      <footer>
          <h3>Developer by Anwar Takriti</h3>
          <div className='android'>
                <a><FcAndroidOs/><h5>Get App</h5></a>
          </div>
          <span>
              <a target={'_blank'} href="https://github.com/atakriti"><BsGithub /></a>
              <a href="mailto:anwart256@gmail.com"><MdEmail/></a>
              
          </span>
    </footer>
  )
}

export default Footer