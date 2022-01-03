import React, { useState, useRef } from 'react';
import { Text, View, Dimensions } from 'react-native';

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
  const mapRef = useRef(null);

  const onCalloutPress = () => {
    mapRef.current.getCamera().then(camera => {
      mapRef.current.animateCamera({
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
            mapRef={mapRef}
            skateparks={skateparks}
            onCalloutPress={onCalloutPress}
          />
          <Button
            title="Reset map"
            onPress={() => {
              mapRef.current.animateCamera({
                center: {
                  latitude: 47.27,
                  longitude: 11.4,
                },
                altitude: 1000,
                pitch: 0,
                heading: 0,
                zoom: 11,
              });
            }}
          />
        </>
      )}
    </View>
  );
};

export default MapScreen;
