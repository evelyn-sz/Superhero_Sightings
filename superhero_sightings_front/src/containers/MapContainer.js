import React from 'react';
import {GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '500px',
  height: '600px'
};

const center = {
  lat: 55.947052415693385, 
  lng: -3.2019743932536713
};
function MapContainer() {
  
      const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";
    
    return(
      <div className="App">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
  
      </div>
    )
  
}

export default MapContainer;