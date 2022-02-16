// librarys
import React, { useEffect } from 'react';
import { View } from 'react-native';

// components
import Text from '../../common/Text';
import DirectionsMethod from './DirectionsMethod';

// hooks
import useDirections from '../../../hooks/useDirections';

// styles
import styles from '../../../styles/SkateparksStyles';
import cols from '../../../styles/Colors';

const EntryDirections = ({ skatepark, location, locLoading, locError }) => {
  const { getDurations, abortDurations, isLoading, error } = useDirections(
    location,
    skatepark,
  );

  useEffect(() => {
    const durations = async () => {
      await getDurations();
    };
    durations();

    return () => {
      abortDurations();
    };
  }, []);

  const icons = ['walking', 'bicycle', 'bus', 'car'];

  return (
    <>
      <View style={styles.entryDirectionsErrorContainer}>
        {error && !locLoading && (
          <Text style={styles.entryDirectionsMethodError}>{error}</Text>
        )}
        {locError && (
          <Text style={styles.entryDirectionsMethodError}>{locError}</Text>
        )}
        {(isLoading || (locLoading && locError == null)) && (
          <Text style={styles.entryDirectionsMethodInfo}>
            Distanzen werden geladen...
          </Text>
        )}
      </View>
      <View style={styles.entryDirectionsContainer}>
        {skatepark.durations !== undefined &&
          skatepark.durations.map((duration, index) => (
            <DirectionsMethod
              key={index}
              icon={icons[index]}
              color={cols.pGradient[index + 1]}
              duration={duration}
            />
          ))}
      </View>
    </>
  );
};

export default EntryDirections;
