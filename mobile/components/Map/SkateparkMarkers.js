import React from 'react';
import MapView from 'react-native-maps';

const SkateparkMarkers = ({ skateparks }) => {
  return skateparks.map(skatepark => (
    <MapView.Marker
      key={skatepark.skateparkId}
      coordinate={{
        latitude: skatepark.latitude,
        longitude: skatepark.longitude,
      }}
      title={skatepark.name}
      description={skatepark.busStop}
    />
  ));
};

export default SkateparkMarkers;
