import React from 'react';


const SightingItem = ({superhero, city, date}) => {

    return (
        <>
        <h4>{superhero.name}</h4>
        <p>{city}</p>
        <p>{date}</p>

        </>


    );
}


export default SightingItem;
