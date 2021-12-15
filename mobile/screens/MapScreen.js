import React, { useState } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import SkateparkMarkers from '../components/Map/SkateparkMarkers';
import Button from '../components/common/Button';
import LoadingCircle from '../components/common/LoadingCircle';

import useFetch from '../hooks/useFetch';

import styles from '../styles/MapStyles';

styles.mapContainer = {
  ...styles.mapContainer,
  height: Dimensions.get('window').width,
};

// animation duration in ms
const animDur = 500;

const initialRegion = {
  latitude: 47.265,
  longitude: 11.42,
  latitudeDelta: 0.08,
  longitudeDelta: 0.08,
};
const MapScreen = () => {
  const { data: skateparks, isLoading, error } = useFetch('skateparks');

  const [region, setRegion] = useState(initialRegion);

  const [mapType, setMapType] = useState('satellite');
  const cycleMapType = () => {
    if (mapType === 'standard') {
      setMapType('satellite');
    } else if (mapType === 'satellite') {
      setMapType('hybrid');
    } else if (mapType === 'hybrid') {
      setMapType('terrain');
    } else {
      setMapType('standard');
    }
  };

  const [mapView, setMapView] = useState(null);

  return (
    <View style={styles.container}>
      {isLoading && <LoadingCircle />}
      {error && <Text style={styles.error}>Error {error}</Text>}
      {skateparks && (
        <>
          <View style={styles.mapContainer}>
            <MapView
              ref={ref => setMapView(ref)}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={region}
              onRegionChangeComplete={setRegion}
              mapType={mapType}>
              <SkateparkMarkers skateparks={skateparks} />
            </MapView>
          </View>
          <ScrollView horizontal={true}>
            <Button
              title="Reset map"
              onPress={() => {
                mapView.animateToRegion(initialRegion, animDur);
              }}
            />
            <Button title="mapType" onPress={cycleMapType} />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default MapScreen;
