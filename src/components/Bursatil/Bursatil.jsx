import React from 'react'
import './bursatil.css'
import Contacto from '../contacto/Contacto';
import Sponsors from '../sponsors/Sponsors';
import Cafer from '../Cafer/Cafer';
import Negocios from '../negocios/Negocios';
import ToroImagen from '../../assets/toro_Nuevo.jpeg';
import caferLogo from '../../assets/caferLogo.png';
import corretaje from '../../assets/CAFERcorretajeblanco.png'
import hombre from '../../assets/hombre-mirando-otro-lado-campo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Bursatil = () => {
  return (
    <div>
      <section id="inicio" className='seccion'>
        <img src={ToroImagen} alt=""  className='img1'/>
        <img src={caferLogo} alt="" className='img2'/>
        <ul className='ulSeccion'>
          <li className="liSeccion">Acciones</li>
          <li className="liSeccion">Titulos Públicos</li>
          <li className="liSeccion">Titulos Privados</li>
          <li className="liSeccion">Obligaciones Negociables</li>
          <li className="liSeccion">Dolar MEP</li>
          <li className="liSeccion">CEDEAR</li>
          <li className="liSeccion">Cauciones</li>
        </ul>
        <div className="whatsapp">
        <h2 className='h2Whatsapp'><FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "green" }} />Comunicate ahora!!</h2>
        </div>
      </section>
      <section id="negocios" className='seccion'>
        <Negocios/>
      </section>
      <section id='corretaje' className='seccion'>
      <img src={hombre} alt=""  className='imgCorretaje'/>
        <img src={corretaje} alt="" className='imgcomercio'/>
        <ul className="ulSeccionCorretaje">
          <li className="liSeccion">Comercialización de cereles, Oleaginosas y subproductos</li>
          <li className="liSeccion">Operaciones de canje de cereales</li>
          <li className="liSeccion"> Compraventa de fertilizantes</li>
          <li className="liSeccion">Operatoria futuros</li>
          <li className="liSeccion">Opciones MATBA-ROFEX</li>
          <li className="liSeccion">Precios mercado local y chicago</li>
          <li className="liSeccion">Informes economicos y evolución de cultivos</li>
          <li className="liSeccion">Análisis de mercados</li>
          <li className="liSeccion">Asesoramiento integral a clientes</li>
        </ul>
        <div className="whatsapp">
        <h2 className='h2Whatsapp'><FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "green" }} />Comunicate ahora!!</h2>
        </div>
      </section>
      <section id="cafer" className='seccion'>
        <Cafer/>
      </section>
      <section className='seccion'>
        <Sponsors/>
      </section>
      <section id="contacto" className='seccion'>
        <Contacto/>
      </section>
    </div>
  )
}

export default Bursatil
