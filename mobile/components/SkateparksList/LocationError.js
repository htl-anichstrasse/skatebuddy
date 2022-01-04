import React from 'react';
import { View, Text, Pressable } from 'react-native';
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
