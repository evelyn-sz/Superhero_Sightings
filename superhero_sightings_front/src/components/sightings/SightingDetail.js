import React, { Fragment } from 'react';


function SightingDetail({onDelete, sighting}){

    const handleDelete = () =>{
        onDelete(sighting.id)
    }

    return (
        <>
        <p>List of sightings banana</p>
        <button onClick={handleDelete}>Delete sighting</button>
        </>
        
    );
}


export default SightingDetail;