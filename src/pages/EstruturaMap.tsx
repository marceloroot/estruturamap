import React,{useEffect,useState} from 'react';

import{Link} from 'react-router-dom';
import {FiPlus,FiArrowRight} from 'react-icons/fi';
import {Map,TileLayer,Marker,Popup} from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/estrutura.map.css';
import mapIcon from '../utils/mapIcon'
import api from '../services/api';



interface Estrutura {
    id:number;
    latitude:number;
    longitude:number;
    name:string;
}

function EstruturaMap(){

    const [estruturas,setEstruturas] = useState<Estrutura[]>([]);

    useEffect(()=>{
        api.get('estruturas').then(response=>{
          setEstruturas(response.data);
        });
    },[]);
    return(
       <div id="page-map">
           <aside>
               <header>
               <img src={mapMarkerImg} alt=""  />

               <h2>Escolha uma Estrutura</h2>
               <p>Muitas obras estão sendo realizada de uma olhada</p>
               </header>

               <footer>
                   <strong>Alfenas</strong>
                   <strong>Minas Gerais</strong>
               </footer>
           </aside>

          <Map 
            center={[ -21.4220611,-45.9499402]}
            zoom={14}
            style={{width:'100%', height:'100%'}}
          >
           <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            {estruturas.map(estrutura => {
                return(

                <Marker
                    icon={mapIcon}
                    position={[ estrutura.latitude,estrutura.longitude]}
                    key={estrutura.id}
                 >
                     <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                         {estrutura.name}
                          <Link to={`estrutura/${estrutura.id}`}>
                              <FiArrowRight size={20} color="#fff"/>
                          </Link>
                     </Popup>
                     
                 </Marker>
                )
            })}
     
         </Map>
  
           <Link to="/estrutura/create" className="create-estrutura">
               <FiPlus size={32} color="#fff" />
           </Link>
       </div>
    );
}

export default EstruturaMap;