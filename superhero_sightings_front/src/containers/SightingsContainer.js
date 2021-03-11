import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SightingForm from '../components/sightings/SightingForm';
import SightingList from '../components/sightings/SightingList';
import SightingItem from '../components/sightings/SightingItem';
import Request from '../helpers/request';
import Map from '../components/maps/Map';
import './MainContainer.css';

const SightingsContainer = () => {

    const [sightings, setSightings] = useState([])
    const [locations, setLocations] = useState([])
    const [superheroes, setSuperheroes] = useState([])

    const getAllData = function(){
      console.log("getting data...");
      const request = new Request();
      const sightingPromise = request.get('/api/sightings')
      const locationPromise = request.get('/api/locations')
      const superheroPromise = request.get('/api/superheroes')

      Promise.all([sightingPromise, superheroPromise, locationPromise])
      .then((data) => {
        console.log("inside the Promise", data);
        setSightings(data[0]);
        setSuperheroes(data[1])
        setLocations(data[2]);
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
      console.log("inside sightingsContainer: handleDelete");
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
        <div className="sightingContainer">

        <Switch>
            <Route exact path = '/sightings/new' render={() => {
              return <SightingForm
              locations={locations}
              superheroes={superheroes}
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
              return <SightingItem sighting={sighting}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              locations={locations}
              superheroes={superheroes}
              />
            }}/>
            

            <Route exact path="/sightings" render={() => {
              return <SightingList onDelete={handleDelete} className="sightingList" sightings={sightings}/>
            }}/>
        </Switch>
            <Map sightings={sightings}/>

        {/* <h1>Superhero Sightings</h1>
        <h2>Recent Sightings</h2>
        <SightingList sightings ={sightings} />
        <h2>Report a Sighting</h2> */}

        </div>
        </Router>

    );
}


export default SightingsContainer;
