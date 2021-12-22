import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../../styles/ReviewsStyles';

const Review = ({ review }) => {
  return (
    <View style={styles.review}>
      <Text>Review Nr {review.reviewId}</Text>
      <Text>Von User {review.userId}</Text>
      <Text>Rating {review.rating}</Text>
      <Text>Titel {review.title}</Text>
      <Text>Body {review.content}</Text>
    </View>
  );
};

export default Review;
