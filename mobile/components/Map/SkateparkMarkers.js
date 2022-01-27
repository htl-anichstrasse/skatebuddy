import React from 'react';
import MapView from 'react-native-maps';

const SkateparkMarkers = ({ skateparks, mapRef }) => {
  return skateparks.map(skatepark => (
    <MapView.Marker
      key={skatepark.skateparkId}
      coordinate={{
        latitude: skatepark.latitude,
        longitude: skatepark.longitude,
      }}
      title={skatepark.name}
      description={skatepark.busstop}
    >
      <MapView.Callout
        onPress={() => {
          mapRef.current.getCamera().then(camera => {
            mapRef.current.animateCamera({
              ...camera,
              center: {
                latitude: skatepark.latitude,
                longitude: skatepark.longitude,
              },
              zoom: 17,
            });
          });
        }}
      ></MapView.Callout>
    </MapView.Marker>
  ));
};

export default SkateparkMarkers;
