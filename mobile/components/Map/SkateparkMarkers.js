import React from 'react';
import { Pressable } from 'react-native';
import MapView from 'react-native-maps';

import Text from '../common/Text';

import styles from '@styles/MapStyles';

const SkateparkMarkers = ({ skateparks, mapRef, navigation }) => {
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
          navigation.navigate('SkateparkDetails', {
            skatepark: skatepark,
            scroll: null,
          });
        }}
      >
        <Text style={styles.calloutTitle}>{skatepark.name}</Text>
        <Text style={styles.calloutDescription}>{skatepark.busstop}</Text>
        {/* <Pressable
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
        >
          <Text style={styles.calloutDescription}>Zoom</Text>
        </Pressable> */}
      </MapView.Callout>
    </MapView.Marker>
  ));
};

export default SkateparkMarkers;
