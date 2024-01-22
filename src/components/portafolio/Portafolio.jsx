import React from 'react'
import './portafolio.css'
import MEGA from '../../assets/flix.png'
import MEGABANT from '../../assets/megab.png'
import ENCRIPTADOR from '../../assets/encripta.png'
import BARBER from '../../assets/barber_shop.png'
import IGLESIA from '../../assets/iglesia-1.png'


const data = [
  {
    id: 1,
    image: MEGA,
    title: 'Megaflix',
    github: 'https://github.com/JhonFaverM/MEGAFLIX',
    demo: 'https://megaflix-xi.vercel.app/'
  },
  {
    id: 2,
    image: MEGABANT,
    title: 'Megabant',
    github: 'https://github.com/JhonFaverM/MEGABANT',
    demo: 'https://megabant.vercel.app/'
  },
  {
    id: 3,
    image: ENCRIPTADOR,
    title: 'Encriptador',
    github: 'https://github.com/JhonFaverM/Encriptar-texto',
    demo: 'https://encriptar-texto.vercel.app/'
  },
  {
    id: 4,
    image: BARBER,
    title: 'Barber Shoop',
    github: 'https://github.com/JhonFaverM/Barberia',
    demo: 'https://barberia-ten.vercel.app/'
  },
  {
    id: 5,
    image: IGLESIA,
    title: 'Pagina Iglesia',
    github: 'https://github.com/JhonFaverM/Iglesia_Bautista_Reformada_Tunja.git',
    demo: 'https://front-iglesia-3aa8ff13a59e.herokuapp.com//'
  },
]

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h2>Projects Created</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo})=> {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt='Megaflix'></img>
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portafolio
