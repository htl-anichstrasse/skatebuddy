import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../styles/ReviewsStyles';

const Review = ({ review }) => {
  return (
    <View>
      <Text style={styles.review}>{review.title}</Text>
    </View>
  );
};

export default Review;
