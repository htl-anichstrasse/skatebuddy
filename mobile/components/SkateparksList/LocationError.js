// libraries
import React from 'react';
import { View, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// components
import Text from '../common/Text';

// hooks

// styles
import colors from '../../styles/Colors';
import styles from '../../styles/LoadingAndErrorsStyles';

const LocationError = ({ getLocation, locError }) => (
  <Pressable
    onPress={() => {
      getLocation();
    }}
  >
    <View style={[styles.locationInfoContainer, styles.locationErrorContainer]}>
      <Text style={styles.locationInfoText}>{locError}</Text>
      <MaterialIcons name="location-disabled" size={24} color={colors.text} />
    </View>
  </Pressable>
);

export default LocationError;
