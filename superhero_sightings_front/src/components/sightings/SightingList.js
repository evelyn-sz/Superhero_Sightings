import React from 'react';
import SightingItem from "./SightingItem.js";
import './SightingList';


const SightingList = ({sightings}) => {

    const sightingNodes = sightings.map(sighting => {
        return (
            <SightingItem superhero={sighting.superhero} location={sighting.location} date={sighting.date} key={sighting.id}></SightingItem>

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