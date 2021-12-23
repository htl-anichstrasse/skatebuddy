import React, { useState } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import SkateparkMarkers from '../components/Map/SkateparkMarkers';
import Button from '../components/common/Button';
import LoadingCircle from '../components/common/LoadingCircle';
import Map from '../components/Map/Map';

import useFetch from '../hooks/useFetch';

import styles from '../styles/MapStyles';

styles.mapContainer = {
  ...styles.mapContainer,
  height: Dimensions.get('window').width,
};

const MapScreen = () => {
  const { data: skateparks, isLoading, error } = useFetch('skateparks');
  const [ref, setRef] = useState(null);

  const onCalloutPress = () => {
    ref.getCamera().then(camera => {
      ref.animateCamera({
        ...camera,
        zoom: 17,
      });
    });
  };

  return (
    <View style={styles.container}>
      {isLoading && <LoadingCircle />}
      {error && <Text style={styles.error}>Error {error}</Text>}
      {skateparks && (
        <>
          <Map
            setRef={setRef}
            skateparks={skateparks}
            onCalloutPress={onCalloutPress}
          />
          <Button
            title="Reset map"
            onPress={() => {
              ref.animateCamera({
                center: {
                  latitude: 47.265,
                  longitude: 11.42,
                },
                altitude: 1000,
                pitch: 0,
                heading: 0,
                zoom: 12,
              });
            }}
          />
        </>
      )}
    </View>
  );
};

export default MapScreen;
