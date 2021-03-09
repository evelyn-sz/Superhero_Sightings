import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = ({ info }) => {
  return (
    <Popup>
      <div className="popup-text">{info}</div>
    </Popup>
  );
};
export default MarkerPopup;