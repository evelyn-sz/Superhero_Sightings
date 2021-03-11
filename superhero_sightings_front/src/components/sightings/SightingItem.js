import React from 'react';
import SightingDetail from './SightingDetail';
import './SightingList.css';


const SightingItem = ({sighting, onDelete}) => {
    const handleDelete = () =>{
        onDelete(sighting.id)
    }

    return (
        <div className="sightingItem">
        <h4>{sighting.superhero.name}</h4>
        <p>{sighting.location.name}</p>
        <p>{sighting.date}</p>
        <button onClick={handleDelete}>Delete sighting</button>

        </div>


    );
}


export default SightingItem;
