"use client";

import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useMemo, useState } from "react";

export const MapComponent = () => {
  const MapContainerStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      borderRadius: "15px 15px 15px 15px",
    }),
    []
  );

  const defaultMapCenter = useMemo(
    () => ({
      lat: 51.497321020223914,
      lng: 0.07983390338260991,
    }),
    []
  );

  const defaultMapZoom = 12;
  const defaultMapOptions = useMemo(
    () => ({
      zoomControl: true,
      tilt: 0,
      gestureHandling: "auto",
      mapTypeId: "roadmap",
    }),
    []
  );

  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.LatLngLiteral | null>(null);

  return (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={MapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        <Marker
          position={defaultMapCenter}
          animation={window.google.maps.Animation.DROP}
          onClick={() => setSelectedMarker(defaultMapCenter)}
        />
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="w-full p-2">
              <h2 className="font-bold text-black mb-1">London</h2>
              <p className="font-normal text-gray-600 mb-2">Woolwich, SE28</p>
              <a
                className="text-blue-700 hover:underline"
                href="https://maps.google.com/maps?ll=51.497321020223914,0.07983390338260991&z=13&t=m&hl=en-GB&gl=UK&mapclient=apiv3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};
