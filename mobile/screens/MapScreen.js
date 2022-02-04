// libraries
import React, { useRef } from 'react';
import { View, Dimensions, Pressable } from 'react-native';

// components
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import Error from '../components/common/Error';
import LoadingCircle from '../components/common/LoadingCircle';
import Map from '../components/Map/Map';
import CircleButton from '../components/Map/CircleButton';

// hooks
import useFetch from '../hooks/useFetch';

// styles
import styles from '../styles/MapStyles';

styles.mapContainer = {
  ...styles.mapContainer,
  height: Dimensions.get('window').width,
};

const MapScreen = ({ navigation }) => {
  const {
    data: skateparks,
    isLoading,
    error,
    refreshData,
  } = useFetch('https://skate-buddy.josholaus.com/api/skateparks');
  const mapRef = useRef(null);

  return (
    <View style={styles.container}>
      {isLoading && <LoadingCircle />}
      {error && <Error error={error} refresh={refreshData} />}
      {skateparks && (
        <>
          <Map
            mapRef={mapRef}
            skateparks={skateparks}
            navigation={navigation}
          />
          <CircleButton
            onPress={() => {
              mapRef.current.animateCamera({
                center: {
                  latitude: 47.27,
                  longitude: 11.4,
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
