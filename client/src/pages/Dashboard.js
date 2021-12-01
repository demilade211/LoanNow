import React from 'react'
import {useAlert} from "react-alert"
import Logo from '../assets/logo.svg'
import Main from '../Components/Dashboard/Sidebar'
import MetaData from '../Components/MetaData'
import { container } from '../stylesheets/dashboard.module.css'

function Dashboard() {
    const alert = useAlert()
    return (
        <div className={container}>
            <MetaData title="Dashboard"/>
            <Main alert={alert} logo={Logo} menulist={['okay', 'okay']}/>
        </div>
    )
}

export default Dashboard
