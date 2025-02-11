import React from 'react'
import BursatilBlanco from '../../assets/logoCaferblanco.png';
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {

  const[dropdownOpen, setDropdownOpen] = useState(false)

  const linkearPage = (id) => {
      const idComponent = document.getElementById(id)
      if(idComponent){
        idComponent.scrollIntoView({ block: "start", behavior: "smooth" });
      }
  }


  return (
    <>
    <div className='navbar'>
      <div className="img">
        <img src={BursatilBlanco}  className='logocafer' alt="" />
      </div>
        <div className="lista">
          <ul className='ul'>
            <li className='listaLi' onClick={()=>linkearPage('inicio')}>Inicio</li>
            <li className='listaLi dropdown' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>Negocios
              <ul className={`submenu ${dropdownOpen ? 'open' : ''}`}>
                <li className="listaLi" onClick={()=>linkearPage('inicio')}>Bursatil</li>
                <li className="listaLi" onClick={()=>linkearPage('negocios')}>Comercio Exterior</li>
                <li className="listaLi" onClick={()=>linkearPage('corretaje')}>Corretaje</li>
              </ul>
            </li>
            <li className='listaLi' onClick={()=>linkearPage('cafer')}>CAFER</li>
            <li className='listaLi' onClick={()=>linkearPage('contacto')}>Contacto</li>
            <li className='listaLi'>accesos</li>
          </ul>
        </div>
    </div>
    
    </>
  )
}

export default Navbar