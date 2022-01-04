import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles/SkateparksStyles';
import gStyles from '../../../styles/GlobalStyles';

const EntryHeader = ({ skatepark }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.entryName}>{skatepark.name}</Text>
      <View style={[styles.entryRatingContainer, gStyles.shadow]}>
        {skatepark.averageRating ? (
          <Text style={styles.entryRatingText}>
            {skatepark.averageRating} ⭐
          </Text>
        ) : (
          <Text style={styles.entryRatingText}>No ratings</Text>
        )}
      </View>
    </View>
  );
};

export default EntryHeader;
