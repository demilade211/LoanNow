import React from 'react'
import Logo from '../assets/logo.svg'
import Sidebar from '../Components/Dashboard/Sidebar'
import { container } from '../stylesheets/dashboard.module.css'

function Dashboard() {
    return (
        <div className={container}>
            <Sidebar logo={Logo} menulist={['okay', 'okay']}/>
        </div>
    )
}

export default Dashboard
