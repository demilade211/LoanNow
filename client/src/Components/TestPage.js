import React from 'react'
import { useAlert } from 'react-alert'
import {useDispatch} from "react-redux"
import { logOut } from '../actions/userActions'
import ClickButton from './Button'

const TestPage = () => {
    const alert = useAlert()
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logOut());
        alert.success('Logged out successfully.')
    }
    return (
        <div style = {{marginTop: "100px"}}>
            Welcome to Dashboard
            <ClickButton variant="secondary" extended text="log out" click={logoutHandler} />
        </div>
    )
}

export default TestPage
