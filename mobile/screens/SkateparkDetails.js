// libraries
import React, { useState } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';

// components
import Text from '../components/common/Text';
import LoadingCircle from '../components/common/LoadingCircle';
import Button from '../components/common/Button';
import AdditionalInfo from '../components/SkateparkDetails/InfoReviews/AdditionalInfo';
import Reviews from '../components/SkateparkDetails/InfoReviews/Reviews';
import Obstacles from '../components/SkateparkDetails/Obstacles/Obstacles';

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

  const {
    data: reviews,
    isLoading,
    error,
    changeData: setReviews,
  } = useFetch('reviews', skatepark.skateparkId);

  const newReview = review => {
    setReviews(prevReviews => {
      review.reviewId = prevReviews.length + 1;
      return [review, ...prevReviews];
    });
  };

  const [hScrollRef, setHScrollRef] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{skatepark.name}</Text>

      <View style={styles.horizontalScroll}>
        <ScrollView>
          <View style={styles.column}>
            <AdditionalInfo skatepark={skatepark} />

            <Obstacles />

            {isLoading && <LoadingCircle />}
            {error && <Text>Error!</Text>}
            {reviews && (
              <Reviews
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
