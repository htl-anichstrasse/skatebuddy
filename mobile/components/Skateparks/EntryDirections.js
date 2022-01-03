// librarys
import React from 'react';
import { View, Text } from 'react-native';

// components
import DirectionsMethod from './DirectionsMethod';

// hooks
// ? hooks

// styles
import styles from '../../styles/SkateparksStyles';

const EntryDirections = ({ skatepark, location }) => {
  return (
    <View style={styles.entryDirectionsContainer}>
      {location === null ? (
        <Text style={styles.entryDirectionsText}>
          Location service unavailable
        </Text>
      ) : (
        skatepark.durations.map((duration, index) => {
          const colors = ['#009E7B', '#009288', '#008690', '#007994'];
          const icons = ['walking', 'bicycle', 'bus', 'car'];
          return (
            <DirectionsMethod
              key={index}
              icon={icons[index]}
              color={colors[index]}
              duration={duration.value}
              index={index}
            />
          );
        })
      )}
    </View>
  );
};

export default EntryDirections;
