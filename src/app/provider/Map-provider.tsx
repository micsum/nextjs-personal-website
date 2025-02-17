"use client";

import { Libraries, useLoadScript } from "@react-google-maps/api";
import { ReactNode } from "react";

const libraries = ["places", "drawing", "geometry"];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Loading error while loading Google Maps</p>;

  if (!scriptLoaded) return <p>Map is loading...</p>;

  return children;
}
