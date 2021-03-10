import React from 'react';


const SightingItem = ({superhero, location, date}) => {

    return (
        <>
        <h4>{superhero.name}</h4>
        <p>{location}</p>
        <p>{date}</p>

        </>


    );
}


export default SightingItem;
