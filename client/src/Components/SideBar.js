import React from 'react';
import { Link } from 'react-router-dom';
import DashLogo from '../assets/dashboard.svg';
import Loans from '../assets/loans.svg';
import Logo from '../assets/logo.png';
import LogOut from '../assets/logout.png';
import Settings from '../assets/settings.svg'; 
import style from '../stylesheets/dashboard.module.css'

const SideBar = () => {
    return (
        <>
              <div className = {style.sideNav}>
                    <img src = {Logo} alt="" />
                    <ul >
                        <li>
                            <Link to = '/dashboard'>
                                <img src= {DashLogo} alt="" />
                                Dashboard
                            </Link>
                        </li>
                        <li >
                            <Link to = '/loans'>
                                <img src= {Loans} alt="" />
                                Loans
                            </Link>
                        </li>
                        <li>
                            <Link to = '/settings'>
                                <img src= {Settings} alt="" />
                                Settings
                            </Link>
                        </li>
                    </ul>
                    
                    <hr/>
                    <ul className = {style.logout}>
                        <li className = {style.leave}>
                            <Link to = '/'>
                                <img src= {LogOut} alt="" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
        </>
    )
}

export default SideBar;