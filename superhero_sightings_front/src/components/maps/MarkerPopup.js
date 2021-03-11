import React from "react";
import { Popup } from "react-leaflet";
// import './MarkerPopup.css'

const MarkerPopup = ({ sighting }) => {
  return (
    <Popup>
      <h2>Who: {sighting.superhero.name}</h2>
      <p>In: {sighting.location.name}</p>
      <p>On: {sighting.date}</p>
    </Popup>
  );
};
export default MarkerPopup;