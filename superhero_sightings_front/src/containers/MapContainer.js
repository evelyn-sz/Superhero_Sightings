import Map from "../components/maps/Map";
import "../App.css";
import { useState, useEffect } from "react";
import Header from '../components/maps/Header';
import Loader from '../components/maps/Loader';

function MapContainer() {
  const [sightings, setSightingData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    getSighting();
  }, []);

  const getSighting = () => {
    console.log("getting sighting data");


    fetch('http://localhost:8000/sightings')
    .then(res => res.json())
    .then(data => setSightingData(data))
    .then(() => setLoading(true))
}

  return (
    <div>
      <Header />
      { !loading ? <Loader/> : <Map sightings={sightings} /> }
    </div>
  );
}

export default MapContainer;




















// /   const {events} = await (await fetch('http://localhost:8000/sightings')).json()
    //   setEventData(events)
    //   setLoading(false)
    // }
    // fetchEvents()
  // }, [])