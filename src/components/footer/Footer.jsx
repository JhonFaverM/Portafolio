import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>Jhon Machado</a>

      <ul className='permalink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portafolio'>Portfolio</a></li>
        <li><a href='#services'>Services</a></li>
        {/*<li><a href='#testimonials'>Testimonials</a></li>*/}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com' target='_blank'><FaGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Jhon Machado. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
