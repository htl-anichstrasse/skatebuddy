import React from 'react';
import MapView from 'react-native-maps';

// marker colors: red (default)

const SkateparkMarkers = ({ skateparks }) => {
  skateparks[0].color = 'red';
  skateparks[1].color = 'navy';

  return skateparks.map(skatepark => (
    <MapView.Marker
      key={skatepark.skateparkId}
      coordinate={{
        latitude: skatepark.latitude,
        longitude: skatepark.longitude,
      }}
      title={skatepark.name}
      description={skatepark.busStop}
      //
      pinColor={skatepark.color}
    />
  ));
};

export default SkateparkMarkers;
