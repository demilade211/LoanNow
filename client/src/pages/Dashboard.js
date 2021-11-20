import React from 'react'
import Logo from '../assets/logo.svg'
import Main from '../Components/Dashboard/Sidebar'
import MetaData from '../Components/MetaData'
import { container } from '../stylesheets/dashboard.module.css'

function Dashboard() {
    return (
        <div className={container}>
            <MetaData title="Dashboard"/>
            <Main logo={Logo} menulist={['okay', 'okay']}/>
        </div>
    )
}

export default Dashboard
