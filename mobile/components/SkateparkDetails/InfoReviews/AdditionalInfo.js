// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '../../common/Text';

// styles
import styles from '../../../styles/SkateparkDetailsStyles';

const AdditionalInfo = ({ skatepark }) => {
  return (
    <>
      <Text style={styles.textCenter}>
        {/*//! skatepark.latitude, skatepark.longitude */}
        {skatepark.lat}° N {skatepark.lon}° W
      </Text>

      {skatepark.address ? (
        <Text style={styles.textCenter}>{skatepark.address}</Text>
      ) : (
        <Text style={styles.textCenter}>No address</Text>
      )}

      <Text style={styles.textCenter}>Haltestelle: {skatepark.busstop}</Text>
    </>
  );
};

export default AdditionalInfo;
