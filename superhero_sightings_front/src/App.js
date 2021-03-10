import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import MapContainer from './containers/MapContainer'
import 'leaflet/dist/leaflet.css';
// import SightingsContainer from "./containers/SightingsContainer"


function App() {
  return (
    <>
    <MainContainer/>
    <MapContainer/>
    </>
  );
}

export default App;
