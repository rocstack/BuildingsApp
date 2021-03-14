import React, { FunctionComponent } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import styles from './Map.module.scss';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

interface Props {}

const Map: FunctionComponent<Props> = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDYlHC4TwHMzUC5XNnPzU3FCie0CaHFVmY',
  });

  const [map, setMap] = React.useState(null);


  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
