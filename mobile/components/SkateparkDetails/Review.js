// libraries
import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '../common/Text';

// hooks

// styles
import styles from '@styles/ReviewsStyles';
import colors from '@styles/Colors';

const Review = ({ review }) => {
  const grayStars = 5 - Math.round(review.rating);
  const filledStars = Math.round(review.rating);

  return (
    <View style={styles.review}>
      <Text style={styles.reviewUser}>Von User {review.userId}</Text>
      <View style={styles.reviewHeader}>
        <Text>
          (#{review.reviewId}) {review.title}
        </Text>
        <View style={styles.starsContainer}>
          {[...Array(filledStars)].map((_, i) => (
            <MaterialCommunityIcons
              key={i}
              name="star"
              size={20}
              color={colors.secondary}
            />
          ))}
          {[...Array(grayStars)].map((_, i) => (
            <MaterialCommunityIcons
              key={i}
              name="star-outline"
              size={20}
              color={colors.secondary}
            />
          ))}
        </View>
      </View>
      <Text style={styles.reviewContent}>{review.content}</Text>
    </View>
  );
};

export default Review;
