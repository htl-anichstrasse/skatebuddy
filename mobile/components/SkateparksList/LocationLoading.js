// libraries
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// components
import Text from '../common/Text';

// styles
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
