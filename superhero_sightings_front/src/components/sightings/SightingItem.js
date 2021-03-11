import React from 'react';
import './SightingList.css';


const SightingItem = ({superhero, location, date}) => {

    return (
        <div className="sightingItem">
        <h4>{superhero.name}</h4>
        <p>{location.name}</p>
        <p>{date}</p>

        </div>


    );
}


export default SightingItem;
