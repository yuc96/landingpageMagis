import React, { useState, useEffect } from 'react';
import Magisjpg from '../images/logoMagis.jpg';
import Android from '../images/Android.png';
import TvAndroid from '../images/Android_TV-Logo.wine.svg';
import FireTv from '../images/Amazon_Fire_TV_logo_(New).png'
import '../assets/index.css';
import '../assets/dowload.css';
const Dowload= () =>{

    return(
    <div>
    
     {/* Barra de navegación */}
   
      <nav>
        <a href='/'>
            <img src={Magisjpg} alt="Magis" />
        </a>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A
        " target='blank'>Suscribirse</a></li>
        </ul>
        <a href='https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A' target='blank'> 
        <button>Prueba Gratis</button>
        </a>
      </nav>
      <div className='dowload-main'></div>
      <div className='dowload'>
        <div className='dowloadTitle'>
                <h2 >Descargas</h2>
                <p>A continuación encontrarás los enlaces directos para  instalación de 
                    Magis TV para los dispositivos compatibles.</p>
        </div>
        <div className='subPlanes'>
        <div className='subDowload'>
        <a href="https://ht.pe/p01" >    
            <h4>Smartphone con android superior a 5.1</h4>
            <img src={Android} alt='Android'></img>
        </a>    
        </div>
        <div className='subDowload'>
        <a href="https://ht.pe/t01" >   
            <h4>TV BOX / Android TV / Mi Box Xiaomi</h4>  
            <img src={TvAndroid} alt='Android'></img>
        </a>    
        </div>
        <div className='subDowload'>
        <a href="https://ht.pe/t01" >  
            <h4>Fire TV Stick / HD / 4K / Lite / Cube</h4>
            <img src={FireTv} alt='Android'></img>
         </a>   
        </div>
        </div>
        </div>

      <div className='dowload'>

      </div>
    </div>
    )
}
export  default Dowload;