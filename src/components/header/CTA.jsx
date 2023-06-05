import React from 'react'
import CursoA from '../../assets/CursoAlura.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CursoA} download className='btn btn-primr'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
