import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles/SkateparksStyles';

const DirectionsMethod = ({ icon, duration, color, index }) => {
  const style =
    index !== 3
      ? [
          styles.entryDirectionsMethodContainer,
          styles.entryDirectionsMethodContainerBorder,
        ]
      : styles.entryDirectionsMethodContainer;

  return (
    <View style={style}>
      <Text style={styles.entryDirectionsMethodText}>{duration}</Text>
      <FontAwesome5 name={icon} size={20} color={color} />
    </View>
  );
};

export default DirectionsMethod;
