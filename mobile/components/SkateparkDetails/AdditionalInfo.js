// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '../common/Text';

// styles
import styles from '@styles/SkateparkDetailsStyles';
import gStyles from '@styles/GlobalStyles';

const AdditionalInfo = ({ skatepark }) => {
  const street = skatepark.address.split(', ')[0];
  const city = skatepark.address.split(', ')[1];

  return (
    <View style={[styles.additionalInfosContainer, gStyles.shadow]}>
      {/* <Text style={styles.textCenter}>
        {skatepark.latitude}° N, {skatepark.longitude}° W
      </Text> */}
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.additionalInfoLabel}>Addresse: </Text>
        <Text style={styles.additionalInfo}>{street}</Text>
      </View>
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.additionalInfoLabel} />
        <Text style={styles.additionalInfo}>{city}</Text>
      </View>
      <View style={styles.additionalInfoContainer}>
        <Text style={styles.additionalInfoLabel}>Haltestelle: </Text>
        <Text style={styles.additionalInfo}>{skatepark.busstop}</Text>
      </View>
    </View>
  );
};

export default AdditionalInfo;
