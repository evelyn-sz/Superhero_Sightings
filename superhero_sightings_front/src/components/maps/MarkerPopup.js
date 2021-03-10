import React from "react";
import { Popup } from "react-leaflet";
// import './MarkerPopup.css'

const MarkerPopup = ({ sighting }) => {
  return (
    <Popup>
      <h2>who: {sighting.name}</h2>
      <p>in: {sighting.location}</p>
      <p>on: {sighting.date}</p>
    </Popup>
  );
};
export default MarkerPopup;

// className="popup-text"