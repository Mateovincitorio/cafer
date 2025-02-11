import React from 'react'
import coop1 from '../../assets/coop1.jpg'
import coop2 from '../../assets/coop2.jpg'
import coop3 from '../../assets/coop3.jpg'
import coop4 from '../../assets/coop4.jpg'
import coop5 from '../../assets/coop5.jpg'
import coop6 from '../../assets/coop6.jpg'
import coop7 from '../../assets/coop7.jpg'
import coop8 from '../../assets/coop8.jpg'
import coop9 from '../../assets/coop9.jpg'
import coop10 from '../../assets/coop10.jpg'
import './sponsors.css'

const Sponsors = () => {
  return (
    <>
    <h2 className="h2coop">Nuestras Cooperativas</h2>
    <div className='grid-container'>
        <img src={coop1} alt="" className="img" />
        <img src={coop2} alt="" className="img" />
        <img src={coop3} alt="" className="img" />
        <img src={coop4}alt="" className="img" />
        <img src={coop5} alt="" className="img" />
        <img src={coop6} alt="" className="img" />
        <img src={coop7} alt="" className="img" />
        <img src={coop8} alt="" className="img" />
        <img src={coop9} alt="" className="img" />
        <img src={coop10} alt="" className="img" />
    </div>
    </>
  )
}

export default Sponsors