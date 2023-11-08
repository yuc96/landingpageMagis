import React, { useState, useEffect } from 'react';
import '../assets/index.css';

// Importamos las imágenes
import Magisjpg from '../images/logoMagis.jpg';
import RickMortyjpg from '../images/Rick2.jpg';
import CollageNetflix from '../images/CollageNetflix2.png';
import BreakingBad from '../images/BreakingBad.jpg';
import HBOmax from '../images/HBO-Max-Page.jpg';
import DisneyPlus from '../images/DisneyPlus.jpg';
import Simpsons from '../images/SimpsonsDisney.jpg';
import Rick6 from '../images/RM_Magis6.jpg';
import StrangerThings from '../images/Strangerthings.jpg';
import Seleccion from '../images/Seleccion.webp'
import Popcorn from '../images/popcorn_1728673.png'
import FullHd from '../images/1080p-full-hd_83522.png'
import Devices from '../images/devices_9806113.png'
import Fast from '../images/fast.png'
import Subscription from '../images/subscription.png'
import Freetrial from '../images/free-trial.png'
import TvVivo from '../images/TelefonoMagis.png'
import TvPelis from '../images/Telfvivo.png'
import Install from '../images/Install.png'
import Buy from '../images/Buy.png'
import Play from '../images/PlayPelis.png'
import TelfDowload from '../images/TelfDowload.png'
import Dowload from '../images/download.png'
import Free from '../images/free.png'


const Index = () => {
  const [index, setIndex] = useState(0);
  const images = [RickMortyjpg,Rick6,CollageNetflix,BreakingBad,HBOmax,DisneyPlus,Simpsons,StrangerThings,Seleccion];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambiar cada 5 segundos (ajusta este valor según tus preferencias)

    return () => {
      clearInterval(timer); // Limpia el temporizador al desmontar el componente
    };
  }, []);

  const divStyle = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: '100% 100%', // Ajusta el tamaño de la imagen al contenedor
    backgroundPosition: 'center', // Centra la imagen
  };

  return (
    <div>
      {/* Barra de navegación */}
      <nav>
        <a href='#start'>
            <img src={Magisjpg} alt="Magis" />
        </a>
        <ul>
          <li><a href="#dowload">Descargar App</a></li>
          <li><a href="https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A
        " target='blank'>Suscribirse</a></li>
          <li><a href="#howdoing">¿Como Funciona?</a></li>
          <li><a href="#Aboutus">Sobre Nosotros</a></li>
          <li><a href="#subscriptionPlan">Planes</a></li>
        </ul>
        <a href='https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A' target='blank'> 
        <button>Prueba Gratis</button>
        </a>
      </nav>

      {/* Contenido principal */}
      <div id='start'>
      <div className='main-content'></div>  
      <div className='subinfo'>
            <h1>Magis Tv</h1>
            <h2>
                Dile adiós a la programación limitada. 
                Magis TV te brinda la libertad de elegir entre más de 1000 
                canales y las mejores series de plataformas populares como Netflix,
                Disney Plus, HBOmax, entre otros en un solo lugar.
            </h2>
      </div>  
      <div style={divStyle} className="infoApp"></div>
    </div>
      {/* Car'acteristicas Increibles */}
      <div className='caracteristics'>
       <div className='subcaracteristics'>
            <h2>Carácteristicas únicas para un Entretenimeinto sin Límites</h2>
            <p>Magis TV ofrece funciones asombrosas que te ayudarán a disfrutar 
             de tus programas favoritos de una manera más fácil y cómoda.</p>
        </div>
        <div className='boxcaracteristics'>
        <ul>
          <li>
          <img src={Popcorn} alt="multimedia"/>
          <h2>Gran Catálogo de Contenido</h2>
          <p>Contamos con una gran biblioteca de contenido, que incluye más de 
            1000 canales en vivo, +5000 series y +15000 películas.</p>
          </li>
          <li>
          <img src={FullHd} alt="multimedia"/>
          <h2>Transmisión de Alta Calidad</h2>
          <p>Magis TV transmite contenido en HD y FHD, para que puedas disfrutar 
            de tus programas y películas favoritos con una resolución nítida.</p>
          </li>
          <li>
          <img src={Devices} alt="multimedia"/>
          <h2>Compatible con Múltiples Dispositivos</h2>
          <p>Es compatible con una amplia gama de dispositivos, incluidos celulares y 
            tablets con Android, Android TV Box, dispositivos Fire TV y Smart TV..</p>
          </li>
          <li>
          <img src={Fast} alt="multimedia"/>
          <h2>Transmisión sin Interrupciones</h2>
          <p>Disfruta de tu contenido sin problemas de lentitud. 
            Magis TV cuenta con uno de los servicios más estables del mercado.</p>
          </li>
          <li>
          <img src={Subscription} alt="multimedia"/>
          <h2>Múltiples Planes de Suscripción</h2>
          <p>Ofrecemos una variedad de planes de suscripción que se adaptan a tus necesidades, 
            desde planes mensuales y anuales con descuentos exclusivos..</p>
          </li>
          <li>
          <img src={Freetrial} alt="multimedia"/>
          <h2>Prueba Gratuita</h2>
          <p>Ofrecemos una prueba gratuita
             para que puedas probar el servicio antes de suscribirte.</p>
          </li>
        </ul>
        </div>
      </div>
      <div id='Aboutus' className='channel'> 
      <img src={TvVivo} alt="channel"/>
      <div className='contentChannel'>
        <h2>Canales en Vivo</h2>
        <h3>Disfruta de tus canales favoritos en vivo</h3>
        <p>Contamos con mas de 1000 canales en vivo categorizados 
            por países y por géneros. Accede a canales
             24/7 exclusivos de Magis TV para disfrutar en familia.</p>
        <a href='https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A' target='blank'>     
        <button>Prueba Gratis</button>   
        </a>  
      </div>
      </div>
      <div className='pelis'> 
      <div className='contentChannel'>
            <h2>Películas y Series</h2>
            <h3>Encuentra películas y series de estreno</h3>
            <p>Accede a nuestro amplio catálogo de películas y series de estreno 
                en cines y en todas las plataformas de streaming más reconocidas.</p>
            <a href='https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A' target='blank'> 
            <button>Prueba Gratis</button>   
            </a>
            <div className='buttompelis'>
                <circle className='circle'>01</circle>
                <div className='buttompelisp'>
                <p>+ de 5000 series</p>
                <p>Series televisivas y de plataformas de streaming.</p>
                </div>
            </div> 
            <div className='buttompelis'>
                <circle className='circle'>02</circle>
                <div className='buttompelisp'>
                    <p>+ de 15000 películas</p>
                    <p>De estreno en cines y en plataformas de streaming</p> 
                </div>   
            </div> 
      </div>
        <img src={TvPelis} alt="channel"/> 
      </div>
      <div id='howdoing' className='caracteristics'>
       <div className='subcaracteristics'>
            <h2 >¿Cómo funciona?</h2>
            <p>MAGIS TV es una aplicación innovadora, exclusiva para
                 dispositivos Android, la cual mediante nuestro servicio IPTV Latino 
                reproduce en una interfaz sencilla canales en HD y FHD.</p>
        </div>
        <div className='boxcaracteristics'>
        <ul>
          <li>
          <img src={Install} alt="multimedia"/>
          <h2>Instala la aplicación</h2>
          <p>Instala la aplicación mediante nuestras guías de instalación.</p>
          </li>
          <li>
          <img src={Buy} alt="multimedia"/>
          <h2>Adquiere un plan</h2>
          <p>Compra un plan y accede mediante un usuario y contraseña.</p>
          </li>
          <li>
          <img src={Play} alt="multimedia"/>
          <h2>Disfruta del contenido!</h2>
          <p>Disfruta de los cientos de canales y miles de películas y series.</p>
          </li>
        </ul>
        </div>
      </div>
      <div id='subscriptionPlan' className='Planes'>
        <div className='subcaracteristics'>
            <h2>Elige tu plan</h2>
            <p>Selecciona un plan y obtén acceso a todo el contenido de 
                MAGIS TV. Si aún no te convences puedes solicitar una cuenta de 
                prueba gratis y luego adquirir uno de nuestros planes.</p>
        </div>
        <div className='subPlanes'>
        <div className='subPlan'>
        <a href="https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionar me%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A" target='blank'>    
            <h2 >Básico</h2>
            <h3>1 mes</h3>
            <p>9$</p>
            <ul>
                <li>+ 1000 canales</li>
                <li>Series + Peliculas</li>
                <li>Calidad HD y FHD</li>
                <li>3 pantallas</li>
                <li>Paquete Premium</li>
            </ul>
        </a>    
        </div>
        <div className='subPlan'>
        <a href="https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionar me%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A" target='blank'>   
            <h2>Pro</h2>
            <h3>3 meses</h3>
            <p>27$</p>
            <ul>
                <li>+ 1000 canales</li>
                <li>Series + Peliculas</li>
                <li>Calidad HD y FHD</li>
                <li>3 pantallas</li>
                <li>Paquete Premium</li>
            </ul>  
        </a>    
        </div>
        <div className='subPlan'>
        <a href="https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionar me%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A" target='blank'>  
            <h2>Élite</h2>
            <h3>6 mesess</h3>
            <p>49$</p>
            <ul>
                <li>+ 1000 canales</li>
                <li>Series + Peliculas</li>
                <li>Calidad HD y FHD</li>
                <li>3 pantallas</li>
                <li>Paquete Premium</li>
                <li>1 Mes Gratis</li>
            </ul>  
         </a>   
        </div>
        <div className='subPlan'>
        <a href="https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionar me%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A" target='blank'>
            <div>
                <h2>Ultra</h2>
                <h3>12 mesess</h3>
                <p>87$</p>
            </div>
            <ul>
                <li>+ 1000 canales</li>
                <li>Series + Peliculas</li>
                <li>Calidad HD y FHD</li>
                <li>3 pantallas</li>
                <li>Paquete Premium</li>
                <li>2 Meses Gratis</li>
            </ul> 
            </a> 
        </div>
        </div>
      </div>
      <div className='dowload'>
      <div className='contentdowload'>
            <div className='subcontentdowload'>
                <h2>Descarga MAGIS TV ahora y pruebalo gratis.</h2>
                <p>Si no estas convencido de comprar un plan, descarga y
                    prueba MAGIS TV completamente gratis sin compromiso alguno.
                </p>
               
                <div className='buttompelis'>
                    <div className='buttompelisp'>
                    <img src={Free} alt="Prueba Gratis"/>      
                    <a href='https://wa.me/593991724610?text=Hola,%0A%0ALe%20escribo%20en%20nombre%20de%20Magis%20TV.%20Estoy%20interesado%20en%20contratar%20un%20plan%20con%20su%20servicio.%20%C2%BFPodr%C3%ADa%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20disponibles%20y%20c%C3%B3mo%20proceder%20con%20la%20suscripci%C3%B3n?%0A%0AEspero%20su%20pronta%20respuesta.%0A%0AGracias.%0A' target='blank'> 
                        <button>Prueba Gratis</button>   
                    </a>
                    </div>
                </div> 
                <div className='buttompelis'>
                    <div className='buttompelisp'>
                    <img src={Dowload} alt="Dowload"/>     
                    <a href='/dowload'target='blank'> 
                        <button>Descargar</button>   
                    </a>
                    </div>  
                </div>  
            </div> 
            <img src={TelfDowload} alt="channel"/>
      </div> 
      </div>
      {/* Pie de página */}
      <footer>
        <div id='dowload' className="footer-content">
          <p>&copy; 2023 Magis. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
