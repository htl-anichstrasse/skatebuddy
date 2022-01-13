// librarys
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

// components
import Text from '../../common/Text';
import DirectionsMethod from './DirectionsMethod';

// hooks

// styles
import styles from '../../../styles/SkateparksStyles';
import cols from '../../../styles/Colors';

const EntryDirections = ({ skatepark, location }) => {
  // write a function to rerender the component every second
  const [count, setCount] = useState(0);
  const [error, setError] = useState('Loading directions...');

  useEffect(() => {
    if (count < 5) {
      setTimeout(() => {
        setCount(pCount => pCount + 1);
      }, 1000);
    } else {
      setError('Could not load directions');
    }
  }, [count]);

  return (
    <View style={styles.entryDirectionsContainer}>
      {location === null ? (
        <Text style={styles.entryDirectionsMethodText}>
          Location service unavailable
        </Text>
      ) : skatepark.durations === undefined ? (
        <Text style={styles.entryDirectionsMethodText}>{error}</Text>
      ) : (
        skatepark.durations.map((duration, index) => {
          const colors = [
            cols.pGradient[1],
            cols.pGradient[2],
            cols.pGradient[3],
            cols.pGradient[4],
          ];
          const icons = ['walking', 'bicycle', 'bus', 'car'];
          return (
            <DirectionsMethod
              key={index}
              icon={icons[index]}
              color={colors[index]}
              duration={duration}
            />
          );
        })
      )}
    </View>
  );
};

export default EntryDirections;
