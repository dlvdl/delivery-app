import { useMemo, React, useState } from "react"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete"
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
  return (
    <Wrapper>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="delivery_app__map-container"
      ></GoogleMap>
    </Wrapper>
  )
}

const PlacesAutocomplete = ({ selected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()
}

const Wrapper = styled.section`
  .delivery_app__map-container {
    width: 100%;
    height: 300px;
  }
`

export default Home
