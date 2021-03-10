import React from 'react';
import SightingItem from "./SightingItem.js";


const SightingList = ({sightings}) => {

    const sightingNodes = sightings.map(sighting => {
        return (
            <SightingItem superhero={sighting.superhero} location={sighting.location.name} date={sighting.date} key={sighting.id}></SightingItem>

        );
    })

    return (
        <>
      		{sightingNodes}		
      </>
    );
}


export default SightingList;