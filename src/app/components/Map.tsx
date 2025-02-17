"use client";

import { GoogleMap } from "@react-google-maps/api";

const MapContainerStyle = {
  width: "50%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter = {
  lat: 51.49859014434136,
  lng: 0.08024334819605643,
};

const defaultMapZoom = 20;
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  mapTypeId: "i'm here",
};

export const MapComponent = () => {
  return (
    <div>
      <GoogleMap
        mapContainerStyle={MapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      ></GoogleMap>
    </div>
  );
};
