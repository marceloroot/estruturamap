import React from 'react';

import{Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map,TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/mark.png';

import '../styles/pages/estrutura.map.css';

function EstruturaMap(){
    return(
       <div id="page-map">
           <aside>
               <header>
               <img src={mapMarkerImg} alt=""  />

               <h2>Escolha uma Estrutura</h2>
               <p>Muitos lugares esperar para você dar uma orlhada</p>
               </header>

               <footer>
                   <strong>Alfenas</strong>
                   <strong>Minas Gerais</strong>
               </footer>
           </aside>

          <Map 
            center={[ -21.4276721,-45.9515365]}
            zoom={15}
            style={{width:'100%', height:'100%'}}
          >
           <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
         </Map>
  
           <Link to="" className="create-estrutura">
               <FiPlus size={32} color="#fff" />
           </Link>
       </div>
    );
}

export default EstruturaMap;