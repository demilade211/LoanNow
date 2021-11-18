import React from 'react'
import { useSelector } from 'react-redux'
import {Route, Redirect} from "react-router-dom"

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
const ProtectedRoute = ({component: Component, ...rest }) => {

    const { isAuthenticated, loading} = useSelector(state=> state.authReducer)
    
    return (
        <>
            {loading === false && (
                <Route 
                    {...rest} 
                    render={props => {

                        if(isAuthenticated === false){
                            return <Redirect to= '/home' />
                        }
                        
                        return <Component {...props} />
                    }}
               />
           )} 
        </>
    )
}


export default ProtectedRoute
