import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'/*conection emailjs*/
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_llfn6vp', 'template_1dx84qq', form.current, 'mfUtHGK9LjTx8jPqR')
      .then(() => {
        e.target.reset()
        mostrarAlerta("Mensaje enviado"); // Mostrar alerta después de enviar el correo electrónico
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error)
      });
  };

  function mostrarAlerta(mensaje) {
    alert(mensaje)
  }
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
       <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          {/*<h5>jhonfaverm@gmail.com</h5>*/}
          <a href='mailto:edio1985@hotmail.com' target='_blank'>Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <a href="https://wa.me/573117697775" target='_blank'>Send a message</a>
        </article>
       </div>
       {/*END OF CONTACT OPTIONS*/}
       <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter your name' required />
          <input type='email' name='email' placeholder='Enter your email' required />
          <textarea name='message' rows="7" placeholder='Write your message..' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
      </div>
    </section>
  )
}

export default Contact
