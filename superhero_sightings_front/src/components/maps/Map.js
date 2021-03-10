import React from "react";
import ReactDOM from 'react-dom'
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';




const Map = ({ center, zoom, sightings, maxBounds, noWrap}) => {
  

  
 const DefaultIcon = L.icon({
  iconUrl: require('./icon.png'),
  iconRetinaUrl: require('./icon.png'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'defaulticon'


});

  const markers = sightings.map((sighting, key) => {
    //  if (sightings[0].id === sighting.id) {
       const lat = sighting.coordinates[0];
       const lng = sighting.coordinates[1];
       return (
      <LocationMarker key={key} lat={lat} lng={lng}  info= 
       {sighting.name} icon={DefaultIcon}/>
      );
    //  }
    // return null 
    });

  return (
    <MapContainer style={{ height: "500px", width: "700px" }} center={center} zoom={zoom}   maxBounds={maxBounds} noWrap={noWrap}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
        
        
        
      />
      {markers}
    </MapContainer>



    
  );
};



Map.defaultProps = {
  center: [44.37656992, -361.41500473],
  zoom: 1.5,
  maxBounds: [[-90, -180],[90, 180]],
  noWrap: true
  
};



export default Map;


// const SightingsContainer = () => {

//   const[sightings, setSightings] = useState (
//       [
//           {
//               id: 1,
//               superhero: "Batman", 
//               city: "Rome", 
//               date: "27-02-2020",
//               coordinates: [
//                 -25.78,
//                 -75.22
//                 ]
//           },
//           {
//               id: 2, 
//               superhero: "Superman",
//               city: "Melbourne",
//               date: "22-04-2021",
//               coordinates: [
//                 -25.78,
//                 -75.22
//                 ]
//           }
//       ]
//   )}

// mapbox://styles/rbodsworth/ckm3j9ybyc74i17p6ag2g0e05
// pk.eyJ1IjoicmJvZHN3b3J0aCIsImEiOiJja20zamkwcGg0Z3U3MnZud3ZtcDFhdnd6In0.0sfFOS9bXhh9vEhFlKpx2Q

// https://api.mapbox.com/styles/v1/rbodsworth/ckm3j9ybyc74i17p6ag2g0e05/tiles/256{z}/{x}/{y}@2xaccess_token=pk.eyJ1IjoicmJvZHN3b3J0aCIsImEiOiJja20zamkwcGg0Z3U3MnZud3ZtcDFhdnd6In0.0sfFOS9bXhh9vEhFlKpx2Q