// libraries
import React, { useState } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';

// components
import Text from '../components/common/Text';
import LoadingCircle from '../components/common/LoadingCircle';
import Button from '../components/common/Button';
import AdditionalInfo from '../components/SkateparkDetails/AdditionalInfo';
import Reviews from '../components/SkateparkDetails/Reviews';
import Obstacles from '../components/SkateparkDetails/Obstacles';
import SkateparkDetailsHeader from '../components/SkateparkDetails/SkateparkDetailsHeader';

// hooks
import useFetch from '../hooks/useFetch';

// styles
import styles from '../styles/SkateparkDetailsStyles';

styles.column = {
  ...styles.column,
  width: Dimensions.get('window').width,
};

const SkateparkDetails = ({ navigation, route }) => {
  const skatepark = route.params.skatepark;

  // const {
  //   data: obstacles,
  //   isLoading: isObstaclesLoading,
  //   error: obstaclesError,
  // } = useFetch(
  //   'https://skate-buddy.josholaus.com/api/obstacles/' + skatepark.skateparkId,
  // );

  const {
    data: reviews,
    isLoading: isReviewsLoading,
    error: reviewsError,
    changeData: setReviews,
  } = useFetch(
    'https://skate-buddy.josholaus.com/api/reviews/' + skatepark.skateparkId,
  );

  const newReview = review => {
    setReviews(prevReviews => {
      review.reviewId = prevReviews.length + 1;
      return [review, ...prevReviews];
    });
  };

  return (
    <View style={styles.container}>
      <SkateparkDetailsHeader skatepark={skatepark} navigation={navigation} />

      <View style={styles.horizontalScroll}>
        <ScrollView>
          <View style={styles.column}>
            <AdditionalInfo skatepark={skatepark} />

            {/* {isObstaclesLoading && <LoadingCircle />}
            {obstaclesError && <Text>Oida {obstaclesError}</Text>}
            {obstacles && <Obstacles obstacles={obstacles} />} */}

            {isReviewsLoading && <LoadingCircle />}
            {reviewsError && <Text>{reviewsError}</Text>}
            {reviews && (
              <Reviews
                skatepark={skatepark}
                reviews={reviews}
                navigation={navigation}
                newReview={newReview}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SkateparkDetails;
