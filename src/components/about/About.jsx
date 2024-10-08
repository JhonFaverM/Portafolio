import React from 'react'
import './about.css'
import Bictia from '../../assets/bictia.jpg'
import Rema from '../../assets/esposos.jpeg'
import Alura from '../../assets/alura1.png'
import Uptc from '../../assets/upt.png'
import Sergio from '../../assets/sergio.png'
//import CertiBictia from '../../assets/colsu-frontend.pdf'
//import CerticadosBictia from '../../assets/certi-bictia/bictia-certif.pdf'
import CertificacionesBictia from '../../assets/certificaciones-bictia.pdf'
import CertificacionesAlura from '../../assets/Certificaciones-Alura.pdf'
import CertificadoSergio from '../../assets/talentoTech.pdf'


const About = () => {
  return (
    <section id='about'>
      <h2>About Me & <br />Courses Taken</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Rema} alt='Esposos' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
          <article className='about__card'>
              <img src={Sergio} alt='Sergio' />
              {/*<FaAward className='about__icon'/>*/}
              <h5>Studies</h5>
              <a href={CertificadoSergio} download className='btn btn-primar' data-tip='descargar certificados'>Sergio</a>
            </article>
            <article className='about__card'>
              <img src={Bictia} alt='Bictia' />
              {/*<FaAward className='about__icon'/>*/}
              <h5>Studies</h5>
              <a href={CertificacionesBictia} download className='btn btn-primar' data-tip='descargar certificados'>Bictia</a>
            </article>
            <article className='about__card'>
              <img src={Alura} alt='Alura' />
              <h5>Studies</h5>
              <a href={CertificacionesAlura} download className='btn btn-primar'>Alura</a>
            </article>
            <article className='about__card'>
              <img className='uptc' src={Uptc} alt='Uptc' />
              <h5>Studies</h5>
              <a href='http://www.uptc.edu.co/facultades/fesad/regencia_farmacia/inf_general/' rel="noreferrer" target='_blank' className='btn btn-primar'>Uptc</a>
            </article>
          </div>
          <p>
            Web development has been a fundamental pillar in my discipline and
            effort for learning. By looking at my progress from a distant perpective,
            I can appreciate the progress made in my knowledge.
            Each obstacle has become a valuable learnig apportunity,
            which has provided me whit the necessary foundations to face new challenges.
            Now, I am looking for the opportunity to be part of a team of professionals
            whit extensive experience, in order to continue growing and acquiring new knowledge.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
