import React from 'react';


const SightingItem = ({superhero, location, date, time}) => {

    return (
        <>
        <h4>{superhero.name}</h4>
        <p>{location}</p>
        <p>{date} and {time}</p>


        </>


    );
}


export default SightingItem;
