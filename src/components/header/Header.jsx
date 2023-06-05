import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import Prueba from '../../assets/reme.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Jhon Machado</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={Prueba} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
