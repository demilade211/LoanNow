/* eslint-disable react/button-has-type */
import React from 'react';
import DashPage from '../Components/DashPage';
import SideBar from '../Components/SideBar';
import style from '../stylesheets/dashboard.module.css';

const Dashboard = () => {
    return (
        <>
            <div className = {style.dashboard}>
                <SideBar />
                <DashPage />
            </div>
        </>
        
    )
}

export default Dashboard;
