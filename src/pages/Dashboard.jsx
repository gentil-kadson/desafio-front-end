import React from 'react'
import UserNav from "../components/UserNav"
import DashboardNav from '../components/DashboardNav';
import MainDashboard from '../components/MainDashboard';
import Alert from '../components/Alert'
import DashboardLogo from '../components/DashboardLogo';

import './Dashboard.css'



function Dashboard() {
    return(
        <main id="content-container">
            <DashboardLogo />
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