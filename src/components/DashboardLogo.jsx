import classes from './DashboardLogo.module.css'
import Logo from '../assets/images/logo.svg'
import React from 'react'


function DashboardLogo() {
    return(
        <div className={classes.logoSize}>
            <img className={classes.image} src={Logo} alt="dashboard-logo" />
        </div>
    ); 
}

export default DashboardLogo