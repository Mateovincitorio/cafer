import React from 'react'
import contenedores from '../../assets/portacontenedores_alto.jpg'
import comercioExterior from  '../../assets/CAFERcomercioexteriorblanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Negocios = () => {
  return (
    <>
    <img src={contenedores} alt=""  className='imgCont'/>
        <img src={comercioExterior} alt="" className='imgcomercio'/>
        <ul className="ulSeccion fix">
          <li className="liSeccion">Servicio de Broker</li>
          <li className="liSeccion">Exportacion por cuenta y orden de terceros</li>
          <li className="liSeccion"> Exportacion de comodities y specialities</li>
          <li className="liSeccion">Importacion de maquinarias</li>
          <li className="liSeccion">Importación de insumos para el agro</li>
          <li className="liSeccion">Mercados: Europa, Africa, USA, Mexico, Mercosur</li>
        </ul>
        <div className="whatsapp">
        <h2 className='h2Whatsapp'><FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "green" }} />Comunicate ahora!!</h2>
        </div>
    </>
  )
}

export default Negocios