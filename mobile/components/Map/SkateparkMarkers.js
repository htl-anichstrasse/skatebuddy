// libraries
import React from 'react';
import MapView from 'react-native-maps';

// components
import Text from '../common/Text';

// styles
import styles from '@styles/MapStyles';

const SkateparkMarkers = ({ skateparks, navigation }) =>
  skateparks.map(skatepark => (
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
            skatepark,
            scroll: null,
          });
        }}
      >
        <Text style={styles.calloutTitle}>{skatepark.name}</Text>
        <Text style={styles.calloutDescription}>{skatepark.busstop}</Text>
      </MapView.Callout>
    </MapView.Marker>
  ));

export default SkateparkMarkers;
