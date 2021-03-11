import React from 'react';
import SightingItem from "./SightingItem.js";
import './SightingList';


const SightingList = ({sightings, onDelete}) => {

    const sightingNodes = sightings.map(sighting => {
        return (
            <SightingItem sighting={sighting} onDelete={onDelete}  key={sighting.id}></SightingItem>

        );
    })

    return (
      <div className="sightingListWrapper">
          <h1 className="reportedSightings">Reported Sightings</h1>
        <div className="sightingList">
      		{sightingNodes}		
      </div>
      </div>
    );
}


export default SightingList;