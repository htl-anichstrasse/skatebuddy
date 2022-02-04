// libraries
import React, { useState } from 'react';
import { View } from 'react-native';

// components
import Text from '../common/Text';
import Button from '../common/Button';
import AddReviewModal from './AddReviewModal';
import Review from './Review';
import ReviewsHeader from './ReviewsHeader';

// hooks

// styles
import styles from '@styles/ReviewsStyles';
import colors from '@styles/Colors';
import gStyles from '@styles/GlobalStyles';

const Reviews = ({ reviews, newReview, skatepark }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <AddReviewModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newReview={newReview}
        parkid={skatepark.skateparkId}
      />
      <Button
        title="Bewertung hinzufügen"
        onPress={() => {
          setModalVisible(true);
        }}
        icon="rate-review"
        iconType="mi"
        style={styles.button}
      />
      <View style={[styles.container, gStyles.shadow]}>
        {reviews.length > 0 ? (
          <>
            <ReviewsHeader reviews={reviews} rating={skatepark.rating} />
            <View style={styles.reviewsContainer}>
              {reviews.map(review => (
                <Review key={review.reviewId} review={review} />
              ))}
            </View>
          </>
        ) : (
          <Text style={styles.noReviewsText}>Keine Bewertungen</Text>
        )}
      </View>
    </>
  );
};

export default Reviews;
