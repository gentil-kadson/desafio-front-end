import React from 'react'
import UserNav from "../components/UserNav"
import DashboardNav from '../components/DashboardNav';
import MainDashboard from '../components/MainDashboard';
import Alert from '../components/Alert'
import DashboardLogo from '../components/DashboardLogo';

import './Dashboard.css'



function Dashboard(props) {

    return(
        <main id="content-container">
            <section className="left-container">
                <DashboardLogo />
                <UserNav />
            </section>
            <section id="dashboard">
                <DashboardNav />
                <MainDashboard>
                    {props.children}
                </MainDashboard>
                <Alert />
            </section>
        </main>
     
    );
}

export default Dashboard