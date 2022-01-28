// libraries
import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '@components/common/Text';

// hooks

// styles
import styles from '@styles/ReviewsStyles';
import colors from '@styles/Colors';

const ReviewsHeader = ({ reviews, rating }) => {
  const grayStars = 5 - Math.round(rating);
  const filledStars = Math.round(rating * 2) / 2;

  return (
    <View style={styles.headerTextContainer}>
      <View style={styles.headerFirstRow}>
        <Text style={styles.headerText}>Bewertung: {rating} </Text>
        <View style={styles.starsContainer}>
          {filledStars % 1 !== 0
            ? [...Array(filledStars - 0.5)].map((_, i) => (
                <MaterialCommunityIcons
                  key={i}
                  name="star"
                  size={25}
                  color={colors.secondary}
                />
              ))
            : [...Array(filledStars)].map((_, i) => (
                <MaterialCommunityIcons
                  key={i}
                  name="star"
                  size={25}
                  color={colors.secondary}
                />
              ))}
          {filledStars % 1 !== 0 && (
            <MaterialCommunityIcons
              name="star-half-full"
              size={25}
              color={colors.secondary}
            />
          )}
          {[...Array(grayStars)].map((_, i) => (
            <MaterialCommunityIcons
              key={i}
              name="star-outline"
              size={25}
              color={colors.secondary}
            />
          ))}
        </View>
      </View>
      <Text style={styles.headerTextSmall}>({reviews.length} Bewertungen)</Text>
    </View>
  );
};

export default ReviewsHeader;
