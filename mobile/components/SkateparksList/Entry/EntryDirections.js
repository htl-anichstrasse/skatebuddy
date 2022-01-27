// librarys
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

// components
import Text from '../../common/Text';
import DirectionsMethod from './DirectionsMethod';

// hooks
import useDirections from '../../../hooks/useDirections';

// styles
import styles from '../../../styles/SkateparksStyles';
import cols from '../../../styles/Colors';

const EntryDirections = ({ skatepark, location }) => {
  const { getDurations, abortDurations, isLoading, error } = useDirections(
    location,
    skatepark,
  );

  useEffect(() => {
    getDurations();

    return () => {
      abortDurations();
    };
  }, []);

  return (
    <View style={styles.entryDirectionsContainer}>
      {error && (
        <Text style={styles.entryDirectionsMethodText}>Fehler: {error}</Text>
      )}
      {isLoading && (
        <Text style={styles.entryDirectionsMethodText}>
          Loading directions...
        </Text>
      )}
      {skatepark.durations !== undefined &&
        skatepark.durations.map((duration, index) => {
          const icons = ['walking', 'bicycle', 'bus', 'car'];
          return (
            <DirectionsMethod
              key={index}
              icon={icons[index]}
              color={cols.pGradient[index + 1]}
              duration={duration}
            />
          );
        })}
    </View>
  );
};

export default EntryDirections;
