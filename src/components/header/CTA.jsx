import React from 'react'
//import CursoA from '../../assets/certi-alura/CursoAlura.pdf'
import AluraLatam from '../../assets/Certificado_Alura_Latam.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={AluraLatam} download className='btn btn-primr'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
