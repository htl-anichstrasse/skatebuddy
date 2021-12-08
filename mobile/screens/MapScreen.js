import React, { useState, useEffect } from 'react';
import { View, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from '../styles/MapStyles';
import Button from '../components/Button';
import SkateparkMarkers from '../components/SkateparkMarkers';
import useSkateparks from '../hooks/useSkateparks';

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
  const [skateparks, setSkateparks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useSkateparks(setSkateparks, setIsLoading);
  }, []);

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
      <View style={styles.mapContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <MapView
            ref={ref => setMapView(ref)}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            onRegionChangeComplete={setRegion}
            mapType={mapType}>
            <SkateparkMarkers skateparks={skateparks} />
          </MapView>
        )}
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
    </View>
  );
};

export default MapScreen;
