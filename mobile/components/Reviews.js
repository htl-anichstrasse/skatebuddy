import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import Review from '../components/Review';
import Button from '../components/common/Button';
import LoadingCircle from './common/LoadingCircle';

import useFetch from '../hooks/useFetch';

import styles from '../styles/ReviewsStyles';

const Reviews = ({ navigation, skateparkId }) => {
  const { data: reviews, isLoading, error } = useFetch('reviews', skateparkId);

  const addReview = review => {
    reviews.push(review);
  };

  return (
    <View>
      {isLoading && <LoadingCircle />}
      {error && <Text>Error!</Text>}
      {reviews && (
        <>
          <Button
            title="New Review"
            onPress={() =>
              addReview({
                reviewId: 4,
                userId: 2,
                skateparkId: skateparkId,
                rating: 4,
                title: 'neue review',
                content: 'heeuuuu',
              })
            }
          />
          <View style={styles.reviews}>
            <View style={styles.header}>
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>Reviews</Text>
              </View>
              <View style={styles.reviewsCountContainer}>
                <Text style={styles.reviewsCount}>{reviews.length}</Text>
              </View>
            </View>
            <FlatList
              data={reviews}
              renderItem={({ item }) => <Review review={item} />}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Reviews;
