import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SightingForm from '../components/sightings/SightingForm';
import SightingList from '../components/sightings/SightingList';
import Request from '../helpers/request';



const SightingsContainer = () => {

    const[sightings, setSightings] = useState (
        [
        //     {
        //         id: 1,
        //         superhero: "Batman", 
        //         location: "Rome", 
        //         date: "27-02-2020"
        //     },
        //     {
        //         id: 2, 
        //         superhero: "Superman",
        //         location: "Melbourne",
        //         date: "22-04-2021"
        //     }
        ]
    )

    const [superheroes, setSuperheroes] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {getAllData()}, [sightings])

    const addSighting = (submittedSighting) => {
        submittedSighting.id = Date.now();
        const updatedSightings = [...sightings, submittedSighting];
        setSightings(updatedSightings);
      }

    

    const getAllData = () =>{
        console.log("getting data...");
        const request = new Request();
        const sightingPromise = request.get('/api/sightings')
        const superheroPromise = request.get('/api/superheroes')
        const locationPromise = request.get('/api/locations')

        Promise.all([sightingPromise, superheroPromise, locationPromise])
        .then((data => {
            setSightings(data[0]);
            setLocations(data[1]);
            setSuperheroes(data[2])
        }))

    }
    const handlePost = (sighting) => {
        const request = new Request();
        request.post("/api/sightings", sighting)
        .then(() => window.location = '/sightings')
    }


    if (!{sightings}) {
        return null
    }
    

    return (
        <Router>
        <>

        <Switch>
            <Route exact path = '/sightings/new' render={
                (props) => {return <SightingForm 
                    superheroes={superheroes}
                    locations={locations}
                    // onSightingSubmit={(sighting) => addSighting(sighting)} 
                    onCreate={handlePost}/> }
            }/>
        </Switch>

        <h1>Superhero Sightings</h1>
        <h2>Recent Sightings</h2>
        <SightingList sightings ={sightings} />	
        <h2>Report a Sighting</h2>
        	
        </>
        </Router>

    );
}


export default SightingsContainer;

