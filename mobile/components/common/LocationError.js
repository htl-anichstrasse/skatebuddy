import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/GlobalStyles';

const LocationError = ({ locError }) => {
  return (
    <View style={styles.locationErrorContainer}>
      <Text style={styles.locationErrorText}>Error {locError}</Text>
    </View>
  );
};

export default LocationError;
