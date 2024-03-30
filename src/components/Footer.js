import React from 'react';
import google from "../assets/google.png"

const Footer = () => {
  return (
    <div className='footer '>
      <div className='ul1'>
        <ul>
            <li className='head1  '>COMPANY</li>
            <li className='l1 '>Team</li>
            <li className='l1 '>Carees</li>
            <li className=' l1 '>Grandma's Blog</li>
            <li className='l1 '>Meghana Food Blog</li>
            <li className='l1 '>Bug Bountry</li>
            <li className='l1 '>Foodies one</li>
        </ul>
      </div>
      <div className='ul2'>
        <ul>
            <li className='head1'>CONTACT</li>
            <li className='l1'>Help & Support</li>
            <li className='l1 '>Partner With Us</li>
            <li className='l1 '>Ride With Us</li>
        </ul>
      </div>
      <div className='ul3'>
        <ul>
            <li className='head1'>LEGAL</li>
            <li className='l1 '>Terms and Conditions</li>
            <li className='l1 '>Refund and Cancellation</li>
            <li className='l1 '>Privacy Policy</li>
            <li className='l1'>Cookie Policy</li>
            <li className='l1 '>Offer Teams</li>
        </ul>
      </div>
      <div>
        <img className='google ' src={google}/>
      </div>
    </div>
  )
}

export default Footer;
