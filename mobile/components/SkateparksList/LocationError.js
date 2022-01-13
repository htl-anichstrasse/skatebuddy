// libraries
import React from 'react';
import { View, Pressable } from 'react-native';

// components
import Text from '../common/Text';

// hooks

// styles
import styles from '../../styles/LoadingAndErrorsStyles';

const LocationError = ({ getLocation, locError }) => {
  return (
    <Pressable
      onPress={() => {
        getLocation();
      }}
    >
      <View style={styles.locationErrorContainer}>
        <Text style={styles.locationErrorText}>{locError}</Text>
      </View>
    </Pressable>
  );
};

export default LocationError;
