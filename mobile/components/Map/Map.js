import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SkateparkMarkers from '../components/SkateparkMarkers';

const Map = () => {
  return (
    <MapView
      ref={ref => setMapView(ref)}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={region}
      onRegionChangeComplete={setRegion}
      mapType={mapType}>
      <SkateparkMarkers skateparks={skateparks} />
    </MapView>
  );
};

export default Map;
export { ref };
