import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css'
import logoImg from '../images/logo2.png'


function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Obras em andamento!</h1>
                    <p>Fique por dentro das construções realizadas na cidade.</p>
                </main>

                <div className="location">
                    <strong>Alfenas</strong>
                    <span>Minas Gerais</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    )
}

export default Landing