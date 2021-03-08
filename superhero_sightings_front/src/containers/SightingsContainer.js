import React from 'react';
import SightingForm from '../components/sightings/SightingForm';


const SightingsContainer = () => {

    const[sightings, setSightings] = useState (
        [
            {
                id: 1,
                superhero: "Batman", 
                city: "Rome", 
                date: "27-02-2020"
            },
            {
                id: 2, 
                superhero: "Superman",
                city: "Melbourne",
                date: "22-04-2021"
            }
        ]
    )

    const addSighting = (submittedSighting) => {
        submittedSighting.id = Date.now();
        const updatedSightings = [...sightings, submittedSighting];
        setSightings(updatedSightings);
      }
    

    return (
        <>
        <h1>Superhero Sightings</h1>
        <h2>Recent Sightings</h2>
        <SightingList sightings ={sightings} />	
        <h2>Report a Sighting</h2>
        <SightingForm onSightingSubmit={(sighting) => addSighting(sighting)}/>	
        </>

    );
}


export default SightingsContainer;

