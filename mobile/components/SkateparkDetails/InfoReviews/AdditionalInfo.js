import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles/SkateparkDetailsStyles';

const AdditionalInfo = ({ skatepark }) => {
  return (
    <>
      <Text style={styles.textCenter}>
        {skatepark.latitude}° N {skatepark.longitude}° W
      </Text>

      {skatepark.address ? (
        <Text style={styles.textCenter}>{skatepark.address}</Text>
      ) : (
        <Text style={styles.textCenter}>No address</Text>
      )}

      <Text style={styles.textCenter}>Haltestelle: {skatepark.busStop}</Text>
    </>
  );
};

export default AdditionalInfo;
