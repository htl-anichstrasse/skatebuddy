// libraries
import React, { useState, useRef, useEffect } from 'react';
import { View, Dimensions, ScrollView, RefreshControl } from 'react-native';

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
import colors from '../styles/Colors';
import ImageCarousel from '../components/SkateparkDetails/ImageCarousel';

styles.column = {
  ...styles.column,
  width: Dimensions.get('window').width,
};

const SkateparkDetails = ({ navigation, route }) => {
  const skatepark = route.params.skatepark;
  const scroll = route.params.scroll;

  const [reviewsY, setReviewsY] = useState(0);
  const scrollViewRef = useRef(null);

  const {
    data: reviews,
    isLoading: isReviewsLoading,
    error: reviewsError,
    changeData: setReviews,
    refreshData,
  } = useFetch(
    'https://skate-buddy.josholaus.com/api/reviews/' + skatepark.skateparkId,
  );

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (scroll) {
      switch (scroll) {
        case 'reviews':
          scrollViewRef.current.scrollTo({ y: reviewsY, animated: true });
          break;
      }
    }
  }, [reviewsY]);

  const newReview = review => {
    setReviews(prevReviews => {
      if (prevReviews.length > 0) {
        review.reviewId =
          Math.max.apply(
            Math,
            prevReviews.map(o => {
              return o.reviewId;
            }),
          ) + 1;
      } else {
        review.reviewId = 1;
      }
      return [review, ...prevReviews];
    });
  };

  return (
    <View style={styles.container}>
      <SkateparkDetailsHeader skatepark={skatepark} navigation={navigation} />

      <ScrollView
        ref={scrollViewRef}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              refreshData();
              setRefreshing(false);
            }}
          />
        }
        decelerationRate={0.99}
      >
        <View style={styles.column}>
          <AdditionalInfo skatepark={skatepark} />
          <ImageCarousel />
          {skatepark.obstacles && <Obstacles obstacles={skatepark.obstacles} />}

          {isReviewsLoading && <LoadingCircle color={colors.secondary} />}
          {reviewsError && <Text>{reviewsError}</Text>}
          {reviews && (
            <View
              onLayout={event => {
                const layout = event.nativeEvent.layout;
                const { y } = layout;
                setReviewsY(y);
              }}
            >
              <Reviews
                skatepark={skatepark}
                reviews={reviews}
                navigation={navigation}
                newReview={newReview}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SkateparkDetails;
