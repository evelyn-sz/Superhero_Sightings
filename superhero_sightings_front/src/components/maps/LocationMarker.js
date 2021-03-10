import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import MarkerPopup from "./MarkerPopup";
import icon from "./icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [32, 32],
  shadowSize: [28, 28],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMarker = ({ lat, lng, sighting }) => {
  return (
    <Marker position={[lat, lng]} icon={DefaultIcon}>
      <MarkerPopup sighting={sighting} />
    </Marker>
  );
};

export default LocationMarker;