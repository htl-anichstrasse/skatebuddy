import React, { useState } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from '../styles/MapStyles';
import Button from '../components/Button';

styles.mapContainer = {
  ...styles.mapContainer,
  height: Dimensions.get('window').width,
};

// animation duration in ms
const animDur = 500;

const initialRegion = {
  latitude: 47.2625012,
  longitude: 11.396226,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};
const MapScreen = () => {
  const [region, setRegion] = useState(initialRegion);

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

  const [mapView, setMapView] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          ref={ref => setMapView(ref)}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          onRegionChange={setRegion}
          mapType={mapType}>
          <MapView.Marker
            coordinate={{
              latitude: 47.2625012,
              longitude: 11.396226,
            }}
            title={'Marker'}
            description={'Marker description'}
          />
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
        <Button
          title="Move west"
          onPress={() =>
            mapView.animateToRegion(
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
            mapView.animateToRegion(
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
