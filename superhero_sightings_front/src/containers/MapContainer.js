import React from 'react';
import {GoogleMap, useLoadScript } from '@react-google-maps/api';
import Map from '../components/maps/Map';
require('dotenv').config();


const containerStyle = {
  width: '500px',
  height: '600px'
};

function MapContainer() {
  
      const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";
    console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    
    return(
      <div className="mapContainer">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={
            {
              lat: 55.947052415693385, 
              lng: -3.2019743932536713
            }
            }
          zoom={10}
          >
            </GoogleMap>
  
      </div>
    )
  
}

export default MapContainer;

// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications