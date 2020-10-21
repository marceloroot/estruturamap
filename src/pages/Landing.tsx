import React from 'react';
import '../styles/pages/landing.css';
import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom';


import logoImg from '../images/logo2.png';

function Landing(){
    return(
    <div id="page-landing">
      <div className="content-wrappwer">
      <img src={logoImg} alt="Happy"/>

      <main>
        <h1>Trazendo felicidade para todos</h1>
        <p>Visite as mudanças e mude o seu modo de ver o mundo</p>
      </main>

      <div className="location">
        <strong>Alfenas</strong>
        <span>Minas Gerais</span>
      </div>

      <Link to="/app" className="enter-app">
         <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
      </Link>
    </div>
    </div>
    );
}

export default Landing;