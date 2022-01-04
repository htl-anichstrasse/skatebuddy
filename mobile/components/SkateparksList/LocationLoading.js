import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../../styles/LoadingAndErrorsStyles';

const LocationLoading = () => {
  return (
    <View style={styles.locationLoading}>
      <Text style={styles.locationLoadingText}>Location service pending</Text>
      <ActivityIndicator />
    </View>
  );
};

export default LocationLoading;
