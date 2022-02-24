import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import './MainDashboard.css'

function MainDashboard(props) {
    const graphicButton = useRef()
    const detailsButton = useRef()
    const [isChosen, setIsChosen] = useState(false)

    function chosenHandler(id) {
        if(id === 'graphic') {
            if(isChosen === true) {
                setIsChosen(false)
                graphicButton.current.classList.remove('chosen') 
    
            } else {
                setIsChosen(true)
                graphicButton.current.classList.add('chosen') 
            }
        } 

        if(id === 'details') {
            if(isChosen === true) {
                setIsChosen(false)
                detailsButton.current.classList.remove('chosen') 
    
            } else {
                setIsChosen(true)
                detailsButton.current.classList.add('chosen') 
            }
        }

    }

    return(
        <section className="main-dashboard-container">
            <section className="main-dashboard-header">
                <Link to="/graphic"><button id='graphic' ref={graphicButton}> Gráficos</button></Link>
                <Link to="/details"><button id="details" ref={detailsButton}>Detalhamento</button></Link>
            </section>
            {props.children}
        </section>
        
    );
}

export default MainDashboard