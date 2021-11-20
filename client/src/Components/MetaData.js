import React from 'react'
import {Helmet} from "react-helmet"


/* eslint-disable react/prop-types */
const MetaData = ({title}) => {
    return (
        <Helmet>
            <title>{`${title} - LoanNow`}</title>
        </Helmet>
    )
}

export default MetaData
