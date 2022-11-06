import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>
        Dhitama
      </a>
      <ul className='permalink'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial`">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/dhitamaa"><IoLogoTwitter/></a>
        <a href="https://instagram.com/dhitamaaa"><FiInstagram/></a>
        <a href="https://facebook.com/dhitama"><FaFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DHITAMA. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer