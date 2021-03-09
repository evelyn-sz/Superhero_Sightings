import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SightingForm from '../components/sightings/SightingForm';
import SightingList from '../components/sightings/SightingList';
import SightingDetail from '../components/sightings/SightingDetail';
import Request from '../helpers/request';



const SightingsContainer = () => {

    const [sightings, setSightings] = useState ([])
    const [superheroes, setSuperheroes] = useState([])
    const [locations, setLocations] = useState([])
    
    const getAllData = function(){
      console.log("getting data...");
      const request = new Request();
      const sightingPromise = request.get('/api/sightings')
      const superheroPromise = request.get('/api/superheroes')
      const locationPromise = request.get('/api/locations')
      
      Promise.all([sightingPromise, superheroPromise, locationPromise])
      .then((data) => {
        console.log(data);
        setSightings(data[0]);
        setLocations(data[1]);
        setSuperheroes(data[2])
      })
    }
    useEffect(() => {
      getAllData()
    }, [])
    
    const findSightingById = function(id){
      return sightings.find((sighting) => {
        return sighting.id === parseInt(id);
      })
    }  

    const handleDelete = function(id){
      const request = new Request();
      const url = "/api/sightings/" + id
      request.delete(url)
      .then(() => window.location = "/sightings")
    }
    
    const handlePost = function(sighting){
        const request = new Request();
        request.post("/api/sightings", sighting)
        .then(() => window.location = '/sightings')
    }

    const handleUpdate = function(sighting){
      const request = new Request();
      request.patch('/api/sightings/' + sighting.id, sighting)
      .then(() => {
        window.location = '/sightings/' + sighting.id
      })
    }


    if (!{sightings}) {
        return null
    }
    

    return (
        <Router>
        <>

        <Switch>
            <Route exact path = '/sightings/new' render={() => {
              return <SightingForm 
                    superheroes={superheroes}
                    locations={locations}
                    // onSightingSubmit={(sighting) => addSighting(sighting)} 
                    onCreate={handlePost}/> 
                  }}/>

            <Route exact path="/sightings/:id/edit" render={(props) => {
              const id = props.match.params.id;
              const sighting = findSightingById(id);
              return <SightingForm sighting={sighting} locations={locations} superheroes={superheroes} onUpdate={handleUpdate}/>
            }}/>

            <Route exact path="/sightings/:id" render={(props) =>{
              const id = props.match.params.id;
              const sighting = findSightingById(id);
              return <SightingDetail sighting={sighting}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              locations={locations}
              superheroes={superheroes}
              />
            }}/>

            <Route render={() => {
              return <SightingList sightings={sightings}/>
            }}/>
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