// libraries
import React from 'react';
import { View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// components
import Text from '../../common/Text';

// styles
import styles from '../../../styles/SkateparksStyles';

const DirectionsMethod = ({ icon, duration, color }) => {
  if (duration.value > 5400) {
    duration.text = '> 1,5h';
  }
  return (
    <View style={styles.entryDirectionsMethodContainer}>
      {/* //* duration.value seconds / duration.text human readable*/}
      <Text style={styles.entryDirectionsMethodText}>{duration.text}</Text>
      <FontAwesome5 name={icon} size={20} color={color} />
    </View>
  );
};

export default DirectionsMethod;
