"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapCameraChangedEvent,
  Pin,
  MapCameraProps,
  RenderingType,
  Marker,
} from "@vis.gl/react-google-maps";

export default function Home() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");

      const { Marker, AdvancedMarkerElement } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      let position = {
        lat: 7.36944256906181,
        lng: 3.8757111620634186,
      };

      const mapOption: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "google-map-id",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOption);

      const marker = new AdvancedMarkerElement({
        position: position,
        map: map,
      });
    };
    initMap();
  }, []);

  return (
    <>
      <div style={{ height: "600px" }} ref={mapRef} />
      {/* <APIProvider
        apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY as string}
        version=""
      >
        <Map
          style={{ width: "100vw", height: "80vh" }}
          defaultCenter={{ lat: 7.36944256906181, lng: 3.8757111620634186 }}
          defaultZoom={20}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          renderingType={"VECTOR "}
        >
          <Marker
            position={{ lat: 7.36944256906181, lng: 3.8757111620634186 }}
          />
        </Map>
      </APIProvider> */}
    </>
  );
}

// 7.362945878783942, 3.8861198700876374
