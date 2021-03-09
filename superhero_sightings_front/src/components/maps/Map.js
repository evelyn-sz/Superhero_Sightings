import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";


const Map = ({ center, zoom, sighting }) => {

  const markers = sighting.map((sightings, key) => {
     if (sighting[0].id === sightings) {
       const [lng] = sightings.coordinates[0];
       const [lat] = sightings.coordinates[1];

    return (
      <LocationMarker key={key} lng={lng} lat={lat} info= 
       {sightings.name} />
      );
     }
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