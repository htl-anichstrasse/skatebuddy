import React from 'react';
import { View, Text, FlatList } from 'react-native';

import Review from './Review';
import Button from '../../common/Button';

import styles from '../../../styles/ReviewsStyles';

const Reviews = ({ navigation, reviews, newReview }) => {
  const newReviewObject = {
    userId: 3,
    skateparkId: 1,
    rating: 1,
    title: 'Ganz ok',
    content: 'Mittelmäiger spot aber nice ramp',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Anzahl Reviews: {reviews.length}</Text>
      <View style={styles.reviewsContainer}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => <Review review={item} />}
          keyExtractor={item => item.reviewId}
        />
      </View>
    </View>
  );
};

export default Reviews;
