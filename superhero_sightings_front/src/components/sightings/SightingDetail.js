import React, { Fragment } from 'react';


function SightingDetail({onDelete, sighting}){

    const handleDelete = () =>{
        console.log("inside sighting detail: handleDelete ", sighting)
        onDelete(sighting.id)
    }

    return (
        <>
        {/* <p>{sighting.date}{sighting.superhero.name}</p> */}
        <button onClick={handleDelete}>Delete sighting</button>
        </>
        
    );
}


export default SightingDetail;