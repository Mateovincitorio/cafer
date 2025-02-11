import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contacto.css'

const Contacto = () => {
  return (
    <>
    <div className="contenedor">
        <div className="izquierda">
            <h1 className='cafercl'>C.A.F.E.R  C.L.</h1>
            <h4 className='h4coop'>Cooperativas Agropecuarias  Federadas de E. Rios Coop. Ltda.</h4>
            <div className="contacto-item">
            <FontAwesomeIcon icon={faLocationDot} /><h3 className='h3contacto'>Dirección: San Juan Nº 842 . Paraná . Entre Ríos</h3>
            </div>
            <div className="contacto-item">
            <FontAwesomeIcon icon={faPhone} /><h3 className='h3contacto'>(54)343-4233001</h3>
            </div>
            <div className="contacto-item">
            <FontAwesomeIcon icon={faEnvelope} /><h3 className='h3contacto'>Email : administracion@cafer.com.ar</h3>
            </div>
            <h3 className="subtitulos">Mesa comercial granos:</h3>
            <div className="contenido">
            <h5>diego.villalba@cafer.com.ar</h5>
            <h5>yamil.beltramino@cafer.com.ar</h5>
            </div>

            <h3 className="subtitulos">Bursatil:</h3>
            <div className="contenido">
                <h5>dignacio.dabin@cafer.com.ar</h5>        
                <h5>rodrigo.espinosa@cafer.com.ar</h5>
                </div>

            <h3 className="subtitulos">Comercio esxterior</h3>
            <div className="contenido">
            <h5>cexterior@cafer.com.ar</h5>
            </div>
        </div>
        <div className="derecha">
        <iframe className='mapaParana' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108571.4435117096!2d-60.66261835052584!3d-31.74708736592491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44df2b9835231%3A0x554ebde0aa5cfa9a!2zUGFyYW7DoSwgRW50cmUgUsOtb3MsIEFyZ2VudGluYQ!5e0!3m2!1ses!2ses!4v1732704067957!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </>
  )
}

export default Contacto