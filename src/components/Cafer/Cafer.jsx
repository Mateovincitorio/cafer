import React from 'react'
import './cafer.css'
import logo from '../../assets/logosolo1.jpg'
import mapa from '../../assets/barra1.jpg'
const Cafer = () => {
  return (
    <>
    <div className="containerArriba">
      <div className="contFoto"><img src={logo} alt=""  className='logofoto'/></div>
      <div className="conth2"><h2 className='subtitulo'>CAFER en el tiempo</h2></div>
    </div>
    <img src={mapa} alt="" className='mapa'/>
    </>
  )
}

export default Cafer