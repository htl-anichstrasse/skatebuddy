// librarys
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// components
import DirectionsMethod from './DirectionsMethod';

// hooks
// ? hooks

// styles
import styles from '../../styles/SkateparksStyles';

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
        <Text style={styles.entryDirectionsText}>
          Location service unavailable
        </Text>
      ) : skatepark.durations === undefined ? (
        <Text style={styles.entryDirectionsText}>{error}</Text>
      ) : (
        skatepark.durations.map((duration, index) => {
          const colors = ['#009E7B', '#009288', '#008690', '#007994'];
          const icons = ['walking', 'bicycle', 'bus', 'car'];
          return (
            <DirectionsMethod
              key={index}
              icon={icons[index]}
              color={colors[index]}
              duration={duration}
              index={index}
            />
          );
        })
      )}
    </View>
  );
};

export default EntryDirections;
