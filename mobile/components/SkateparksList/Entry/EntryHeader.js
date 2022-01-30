// libraries
import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '../../common/Text';

// hooks

// styles
import styles from '../../../styles/SkateparksStyles';
import gStyles from '../../../styles/GlobalStyles';
import colors from '../../../styles/Colors';

const EntryHeader = ({ skatepark }) => {
  const rating = Math.round((skatepark.rating + Number.EPSILON) * 10) / 10;

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.entryName}>{skatepark.name}</Text>

      <View style={[styles.entryRatingContainer, gStyles.shadow]}>
        {skatepark.rating ? (
          <>
            <Text style={styles.entryRatingText}>{rating}</Text>
            <MaterialCommunityIcons
              name="star"
              size={20}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </>
        ) : (
          <Text style={styles.entryRatingText}>N/A</Text>
        )}
      </View>
    </View>
  );
};

export default EntryHeader;
