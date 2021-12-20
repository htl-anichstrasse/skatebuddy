import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SkateparkMarkers from './SkateparkMarkers';

import mapStyles from '../../styles/MapStyles';

const Map = ({ skateparks, setRef, onCalloutPress }) => {
  const camera = {
    center: {
      latitude: 47.265,
      longitude: 11.42,
    },
    altitude: 1000,
    pitch: 0,
    heading: 0,
    zoom: 12,
  };

  return (
    <MapView
      // props
      provider={PROVIDER_GOOGLE}
      style={mapStyles.map}
      ref={ref => setRef(ref)}
      initialCamera={camera}
      showsPointsOfInterest={false}
      showsCompass={false}
      showsIndoors={false}
      minZoomLevel={8}
      rotateEnabled={false}
      pitchEnabled={false}
      toolbarEnabled={true}
      // events
      onCalloutPress={onCalloutPress}>
      <SkateparkMarkers skateparks={skateparks} />
    </MapView>
  );
};

export default Map;
