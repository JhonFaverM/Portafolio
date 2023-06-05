import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Services</h5>
      <h2>Services</h2>

      <div className='container services__container'>

            <article className='service'>
              <div className='service__head'>
                <h3>CONTENT CREACION</h3>
              </div>
              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
              </ul>
            </article>
            {/*END UI/UX DESIGN*/}
            <article className='service'>
              <div className='service__head'>
                <h3>WEB DEVELOPMENT</h3>
              </div>
              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
              </ul>
            </article>

      </div>
    </section>
  )
}

export default Services
