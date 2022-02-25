import { useRef } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import './MainDashboard.css'

function MainDashboard(props) {
    let graphicClass = useRef()
    let detailsClass = useRef() 

    return(
        <section className="main-dashboard-container">
            <section className="main-dashboard-header">
                <Link to="/graphic"><button id='graphic' ref={graphicClass}> Gráficos</button></Link>
                <Link to="/details"><button id="details" ref={detailsClass}>Detalhamento</button></Link>
            </section>
            {props.children}
        </section>
        
    );
}

export default MainDashboard