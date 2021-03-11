import React from 'react';  

const Loader = ({loading}) => {
    if (! loading){

    
    return (
        <div className="loader">
            <h2>Loading ...</h2>
        </div>
    )
}}

export default Loader;