import { useMemo, React, useState, useEffect } from "react"
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  StandaloneSearchBox,
} from "@react-google-maps/api"

import styled from "styled-components"

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  })

  if (!isLoaded) return <div>Loading...</div>

  return <Map></Map>
}

function Map() {
  const center = useMemo(() => ({ lat: 49.23, lng: 28.46 }), [])
  const [selected, setSelected] = useState(null)
  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete)
  }

  useEffect(() => {
    // Fetch the address based on the known latitude and longitude
    const geocoder = new window.google.maps.Geocoder()

    geocoder.geocode({ location: selected }, (results, status) => {
      if (status === "OK" && results[0]) {
        console.log(results[0].formatted_address)
        setSelected(results[0].formatted_address)
      }
    })
  }, [selected])

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlaces()
    }
  }

  return (
    <Wrapper>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="delivery_app__map-container"
        onClick={(e) => {
          setSelected({ lat: e.latLng.lat(), lng: e.latLng.lng() })
        }}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search for a place"
            value={selected || ""}
            onChange={(e) => setSelected(e.target.value)}
            className="standalone-search-box"
          />
        </StandaloneSearchBox>
        <MarkerF position={selected}></MarkerF>
      </GoogleMap>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .delivery_app__map-container {
    width: 100%;
    height: 300px;
  }

  .standalone-search-box {
    box-sizing: border-box;
    border: 1px solid transparent;
    width: 240px;
    height: 32px;
    padding: 0 12px;

    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    outline: none;
    text-overflow: ellipses;
    position: absolute;

    bottom: 0;
    /* margin-left: -120px; */
  }
`

export default Home
