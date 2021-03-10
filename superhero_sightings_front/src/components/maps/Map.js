import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ sightings }) => {

 const DefaultIcon = L.icon({
  iconUrl: require('./icon.png'),
  iconRetinaUrl: require('./icon.png'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'defaultIcon'
});

  console.log("Inside map", sightings)

  const markers = sightings.map((sighting, key) => {
       const lat = sighting.location.lat;
       const lng = sighting.location.lng;
       return (
         <LocationMarker key={key} lat={lat} lng={lng} sighting={sighting} icon={DefaultIcon}/>
         );
         //  }
         console.log("Inside markers in Map", markers)
    // return null 
    });


    const center = [42.3265, -122.8756];
    const zoom = 5;

  return (
    <MapContainer style={{ height: "500px", width: "500px" }} center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
      />
      {markers}
    </MapContainer>
  );
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