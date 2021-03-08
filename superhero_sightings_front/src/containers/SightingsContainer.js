import React, {useState} from 'react';
import SightingList from "../components/sightings/SightingList.js";	
import SightingForm from "../components/sightings/SightingForm.js";	


const SightingsContainer = () => {

    const[sightings, setSightings] = useState (
        [
            {
                id: 1,
                superhero: "Batman", 
                city: "Rome", 
                date: "27/02/2020"
            },
            {
                id: 2, 
                superhero: "Superman",
                city: "Melbourne",
                date: "22/04/2021"
            }
        ]
    )

    return (
        <>
        <h1>Superhero Sightings</h1>
        <h2>Recent Sightings</h2>
        <SightingList sightings ={sightings} />	
        <h2>Report a Sighting</h2>
        <SightingForm />
        </>

    );
}


export default SightingsContainer;

