import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import styled from 'styled-components';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
};

const MapViewer = (): JSX.Element => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY ?? '',
  });
  const center = useMemo(() => ({ lat: 37, lng: 127 }), []);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={OPTIONS}
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapViewer;
