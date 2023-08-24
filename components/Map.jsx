import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Map from "ol/Map";
import View from "ol/View";
import { Tile as TileLayer } from "ol/layer";
import { OSM as OSMSource } from "ol/source";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSMSource(),
        }),
      ],
      view: new View({
        center: [43.6532, -79.3832], // Toronto coordinates: longitude, latitude
        zoom: 10, // Zoom level (1-19)
      }),
    });
  }, []);

  return (
    <div>
      <Head>
        <title>OpenStreetMap in Next.js</title>
      </Head>
      <h1>OpenStreetMap Example</h1>
      <div ref={mapRef} className="map-container" style={{ width: "100%", height: "400px" }} />
    </div>
  );
};

export default MapComponent;

