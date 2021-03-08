import React from 'react';
import SightingList from "../components/sightings/SightingList.js";	
import SightingForm from "../components/sightings/SightingForm.js";	


function SightingsContainer(){

    return (
        <>
        <h1>Superhero Sightings</h1>
        <h2>Recent Sightings</h2>
        <SightingList />	
        <h2>Report a Sighting</h2>
        <SightingForm />
        </>

    );
}


export default SightingsContainer;

