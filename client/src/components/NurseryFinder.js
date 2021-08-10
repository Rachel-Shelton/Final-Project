// how to get static marker instead of onclick of location

//on marker click
//write an array of plant nurseries and map through nurseries.map((nursery) => {
//   name, hours, pic, address
// })
//by lat/lng of the marker

import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { GiFlowerPot } from "react-icons/gi";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  // MarkerClusterer,
} from "@react-google-maps/api";

// import { formatRelative } from "date-fns";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";

// import "@reach/combobox/styles.css";

const libraries = ["places"];

const mapContainerStyle = {
  width: "99vw",
  height: "97vh",
};
const center = {
  lat: 45.545,
  lng: -73.656118,
};

const MapBounds = {
  north: -79.76,
  south: 44.99,
  west: 62.59,
  east: -57.1,
};

const restrictions = {
  latLngBounds: MapBounds,
};

const nurseries = [
  [
    "Serres Riel",
    45.52534,
    -73.60402,
    "Website: https://serresriel.com/",
    "Phone#: 450.454.9425",
  ],

  [
    "Botanista Plants",
    45.51241,
    -73.55469,
    "Website: https://botanistaplants.ca/",
    "Phone#: N/A",
  ],

  [
    "Centre Jardin Atwater",
    45.47824,
    -73.57697,
    "Website: http://www.centrejardinatwater.com/",
    "Phone#: 514.933.7817",
  ],

  [
    "West Island Nursery/Pepiniere de l'ouest Inc.",
    45.46361,
    -73.87157,
    "Website: https://westislandnursery.com/",
    "Phone#: .514.620.2615",
  ],

  [
    "Vertuose Inc",
    45.52523,
    -73.59759,
    "Website: https://www.vertuose.com/",
    "Phone#: 514.276.4048",
  ],

  [
    "Tropical 1",
    45.43699,
    -73.86295,
    "Website: https://www.tropical-1.com/",
    "Phone#: 514.989.1977",
  ],

  [
    "Planterra",
    45.47611,
    -73.78465,
    "Website: https://www.planterra.ca/",
    "Phone#: 1.877.648.1711",
  ],

  [
    "Angel Jardins",
    45.47998,
    -73.57648,
    "Website: N/A",
    "Phone#: 514.938.8780",
  ],

  [
    "Urban Seedling",
    45.4363,
    -73.5846,
    "Website: https://www.urbanseedling.com/garden-center/",
    "Phone#: N/A ",
  ],

  [
    "Dragon Flowers",
    45.52534,
    -73.60402,
    "Website: N/A",
    "Phone#: 514.278.8818",
  ],
];

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const NurseryFinder = () => {
  const [selected, setSelected] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading the map. Please try again.";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <Home to="/home">
        Plant Parenthood <GiFlowerPot />
      </Home>
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          restrictions={restrictions}
          options={options}
        >
          {nurseries.map((nursery) => (
            <Marker
              position={{ lat: nursery[1], lng: nursery[2] }}
              // icon={{
              //   scaledSize: new window.google.maps.Size(10, 10),
              // }}
              onClick={() => {
                setSelected(nursery);
              }}
            />
          ))}
          {selected ? (
            <InfoWindow
              position={{ lat: selected[1], lng: selected[2] }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2> {selected[0]}</h2>
                <p>{selected[3]} </p>
                <p>{selected[4]} </p>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </>
  );
};

const Home = styled(Link)`
  position: absolute;
  color: black;
  font-size: 25px;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  :visited {
    color: black;
  }
`;

export default NurseryFinder;
