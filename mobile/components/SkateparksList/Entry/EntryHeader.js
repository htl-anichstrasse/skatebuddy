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
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.entryName}>{skatepark.name}</Text>

      <View style={[styles.entryRatingContainer, gStyles.shadow]}>
        {skatepark.averageRating ? (
          <>
            <Text style={styles.entryRatingText}>
              {skatepark.averageRating}
            </Text>
            <MaterialCommunityIcons
              name="star"
              size={20}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </>
        ) : (
          <Text style={styles.entryRatingText}>No ratings</Text>
        )}
      </View>
    </View>
  );
};

export default EntryHeader;
