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

const MapScreen = () => {
  const [skateparks, setSkateparks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useSkateparks(setSkateparks, setIsLoading);
  }, []);

  const [region, setRegion] = useState({
    latitude: 47.2625012,
    longitude: 11.396226,
    latitudeDelta: 0.2,
    longitudeDelta: 0.2,
  });

  const [mapType, setMapType] = useState('standard');
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

  const [mapview, setMapview] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <MapView
            ref={ref => setMapview(ref)}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            onRegionChangeComplete={setRegion}
            mapType={mapType}>
            <SkateparkMarkers skateparks={skateparks} mapview={mapview} />
          </MapView>
        )}
      </View>
      <ScrollView horizontal={true}>
        <Button
          title="Move map"
          onPress={() => {
            setRegion({
              ...region,
              latitude: region.latitude + 0.01,
            });
          }}
        />
        <Button title="mapType" onPress={cycleMapType} />
        <Button
          title="Move west"
          onPress={() =>
            mapview.animateToRegion(
              {
                ...region,
                longitude: region.longitude - 0.1,
              },
              animDur,
            )
          }
        />
        <Button
          title="Move east"
          onPress={() =>
            mapview.animateToRegion(
              {
                ...region,
                longitude: region.longitude + 0.1,
              },
              animDur,
            )
          }
        />
      </ScrollView>
    </View>
  );
};

export default MapScreen;
