// libraries
import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// components
import SkateparkMarkers from './SkateparkMarkers';

// hooks

// styles
import mapStyles from '../../styles/MapStyles';

const Map = ({ skateparks, mapRef, navigation }) => {
  const camera = {
    center: {
      latitude: 47.27,
      longitude: 11.4,
    },
    altitude: 1000,
    pitch: 0,
    heading: 0,
    zoom: 12,
  };

  return (
    <MapView
      // props
      showsUserLocation={true}
      provider={PROVIDER_GOOGLE}
      style={mapStyles.map}
      ref={mapRef}
      initialCamera={camera}
      showsPointsOfInterest={false}
      showsCompass={false}
      showsIndoors={false}
      minZoomLevel={8}
      rotateEnabled={false}
      pitchEnabled={false}
      // events
      onRegionChangeComplete={() => {}}
    >
      <SkateparkMarkers
        skateparks={skateparks}
        mapRef={mapRef}
        navigation={navigation}
      />
    </MapView>
  );
};

export default Map;
