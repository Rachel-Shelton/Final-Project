// how to get static marker instead of onclick of location

//on marker click
//write an array of plant nurseries and map through nurseries.map((nursery) => {
//   name, hours, pic, address
// })
//by lat/lng of the marker

import React from "react";

import styled from "styled-components";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { formatRelative } from "date-fns";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "90vw",
  height: "90vh",
};
const center = {
  lat: 45.50169,
  lng: -73.567253,
};

const NurseryFinder = () => {
  const { isLoaded, loadError } = useLoadScript({
    //fix this, key is not properly registered
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading the map. Please try again.";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <Header>map</Header>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
        ></GoogleMap>
      </div>
    </>
  );
};

const Header = styled.div`
  margin-top: 5vh;
`;

export default NurseryFinder;
