import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Box from '@mui/material/Box';

const containerStyle = {

  width: '350px',
  height: '200px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

export default function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDKaAqPZgQKr5UXzPreck5tPUJsam7mvjI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>

  ) : <></>
}

