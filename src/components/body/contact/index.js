import React from 'react'
import './contact.css'
import SocialContact from "../../common/social-contact/index.js"
import Separator from '../../common/separator';
const Contact = () => {
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of the given plateform by clicking any logo.</p>
          <SocialContact/>
        </div>
        <div className="download">
          <a  href={require("../../../assets/resume shivbhan kushwaha")}>
          <i class="fi fi-rr-cloud-download download-icon"></i>
             Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
