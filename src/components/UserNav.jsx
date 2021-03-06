import React from 'react'
import { useState, useEffect } from 'react'
import './UserNav.css'
import { Link } from 'react-router-dom'
import plus from '../assets/images/plus.svg'
import rightArrow from '../assets/images/right-arrow.svg'
import arrowSelected from '../assets/images/arrow-selected.svg'
import dashboard from '../assets/images/dashboard.svg'
import configs from '../assets/images/configs.svg'

function UserNav() {
    const [userData, setUserData ] = useState([])

    useEffect(() => {
        fetch('https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps/me')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUserData(data.data)
        })
    }, [])

    return(
        <section id="user-nav-container">
            <div id="requests">
                <label htmlFor="solicitacoes">Solicitações</label><br />
                <Link to="/solicitacoes"><div className='items-container'><img src={plus} alt="requests" /><button className='user-nav-buttons requests'>Solicitações</button><img src={rightArrow} alt="right-arrow" /></div></Link>
            </div>

            <div id="menu">
                <label htmlFor="dashboard">Menu</label><br />
                <Link to="/dashboard"><div className='selected items-container'><img src={dashboard} alt="dashboard" className='selected'/><button className='user-nav-buttons selected'>Dashboard</button><img src={arrowSelected} alt="arrow-selected"/></div></Link>
            </div>

            <div id="managing">
                <label htmlFor="configs">Administrador</label><br />
                <Link to="/settings"><div className="items-container"><img src={configs} alt="configs" /><button className='user-nav-buttons'>Configurações</button><img src={rightArrow} alt="right-arrow" /></div></Link>
            </div>

            <div id="user">
                <label htmlFor="user-page">Usuário</label><br />
                <Link to="/user"><div className="items-container"><img src={userData.avatar} alt="profile" /><button className='user-nav-buttons picture'>{userData.name}</button></div></Link>

            </div>

        </section>

    );
}

export default UserNav 