"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const GeocodingService = ({ onMesageChange }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [latLng, setLatLng] = useState({ lati: "", long: "" });

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      if (window.google && window.google.maps) {
        initializeMap();
      } else {
        

        window.initMap = initializeMap;
      }
    };

    loadGoogleMapsAPI();

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  const initializeMap = () => {
    const defaultLocation = { lat: 33.027968, lng: 73.6010478 };

    const mapInstance = new google.maps.Map(mapRef.current, {
      zoom: 15,
      center: defaultLocation,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    const markerInstance = new google.maps.Marker({
      position: defaultLocation,
      map: mapInstance,
    });

    setMap(mapInstance);
    setMarker(markerInstance);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapInstance.setCenter(userLocation);
          markerInstance.setPosition(userLocation);
        },
        () => {
          console.warn("Geolocation failed. Defaulting to predefined location.");
        }
      );
    } else {
      console.warn(
        "Geolocation not supported by browser. Defaulting to predefined location."
      );
    }

    mapInstance.addListener("click", async (e) => {
      const position = e.latLng;
      markerInstance.setPosition(position);
      mapInstance.setCenter(position);

      // Reverse Geocode
      try {
        const API_KEY = "AIzaSyAZZUXJEB6v7iXbsDfiq23FfrvTN2hxaXM";
        const GEOCODE_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat()},${position.lng()}&key=${API_KEY}`;

        const response = await axios.get(GEOCODE_API_URL);
        const { results } = response.data;

        if (results.length > 0) {
          const address = results[0].formatted_address;

          const newLatLng = {
            lati: position.lat().toString(),
            long: position.lng().toString(),
            add: address
          };
          setLatLng(newLatLng);
          onMesageChange(newLatLng);
        } else {
          alert("No address found for this location.");
        }
      } catch (error) {
        alert(
          "Reverse Geocoding was not successful for the following reason: " +
            error.message
        );
      }
    });
  };

  const handleSubmit = async () => {
    if (inputValue) {
      try {
        const API_KEY = "AIzaSyAZZUXJEB6v7iXbsDfiq23FfrvTN2hxaXM";
        const GEOCODE_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          inputValue
        )}&key=${API_KEY}`;

        const response = await axios.get(GEOCODE_API_URL);
        const { results } = response.data;

        if (results.length > 0) {
          const location = results[0].geometry.location;
          map.setCenter(location);
          marker.setPosition(location);
          setLatLng({
            lati: location.lat.toString(),
            long: location.lng.toString(),
          });
          console.log("Geocode results:", results[0].formatted_address, location);
        } else {
          alert("No results found.");
        }
      } catch (error) {
        alert(
          "Geocode was not successful for the following reason: " +
            error.message
        );
      }
    } else {
      alert("Please enter a location.");
    }
  };

  useEffect(() => {
    if (latLng.lati && latLng.long) {
      console.log("Updated latLng:", latLng);
    }
  }, [latLng]);

  return (
    <div className="relative flex justify-center">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a location"
          value={inputValue}
          className="w-full text-black h-12 border-2"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-brand-darkGray rounded p-3"
          onClick={handleSubmit}
        >
          Geocode
        </button>
      </div>
      <div
        id="map"
        ref={mapRef}
        style={{
          width: "100%",
          height: "300px",
          border: "1px solid #ccc",
        }}
      ></div>
    </div>
  );
};

export default GeocodingService;
