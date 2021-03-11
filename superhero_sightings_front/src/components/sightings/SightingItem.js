import React from 'react';
import SightingDetail from './SightingDetail';
import './SightingList.css';


const SightingItem = ({superhero, location, date}) => {

    return (
        <div className="sightingItem">
        <h4>{superhero.name}</h4>
        <p>{location.name}</p>
        <p>{date}</p>
        <SightingDetail/>

        </div>


    );
}


export default SightingItem;
