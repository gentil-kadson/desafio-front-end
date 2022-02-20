import React from 'react'
import UserNav from "../components/UserNav"
import DashboardNav from '../components/DashboardNav';
import MainDashboard from '../components/MainDashboard';
import Alert from '../components/Alert'

import './Dashboard.css'

import icon from '../assets/images/logo.svg'

function Dashboard() {
    return(
        <main id="content-container">
             {/* <img src={icon} alt="icon" /> */}
            <UserNav />
            <section id="dashboard">
                <DashboardNav />
                <MainDashboard />
                <Alert />
            </section>
        </main>
     
    );
}

export default Dashboard