import React from 'react'
import {Link} from 'react-router-dom'
import { container, modal_box, heading, subHeading, message } from '../stylesheets/appModal.module.css';
import ClickButton from './Button'

// eslint-disable-next-line react/prop-types
function Appmodal({title, subtitle, text, path, target}) {
    return (
        <div className={container}>
            <div className={modal_box}>
                <p className={heading}>{title}</p>
                <p className={subHeading}>{subtitle}</p>
                <p className={message}>{text}</p>
                <Link to={path}>
                    <ClickButton variant='secondary' extended text={target}/>
                </Link>
            </div>
            
        </div>
    )
}

export default Appmodal
