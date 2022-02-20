import { Link } from 'react-router-dom'
import React from 'react'
import './MainDashboard.css'

function MainDashboard() {
    return(
        <section className="main-dashboard-container">
            <section className="main-dashboard-header">
                <Link to="/graphic"><button id='graphic' className='chosen'>Gráficos</button></Link>
                <Link to="/details"><button id="details">Detalhamento</button></Link>
            </section>
        </section>

        
    );
}

export default MainDashboard