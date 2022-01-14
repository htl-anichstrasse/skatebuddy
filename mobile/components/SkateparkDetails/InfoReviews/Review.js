// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '../../common/Text';

// hooks

// styles
import styles from '../../../styles/ReviewsStyles';

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
