import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import L from 'leaflet';




const Map = ({ center, zoom, sightings }) => {

  
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
      <LocationMarker key={key} lat={lat} lng={lng}  sighting= 
       {sighting} icon={DefaultIcon}/>
      );
    //  }
    // return null 
    });

  return (
    <MapContainer style={{ height: "100vh" }} center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
};

Map.defaultProps = {
  center: [42.3265, -122.8756],
  zoom: 0,
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