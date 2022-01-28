// libraries
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

// components
import Text from '../common/Text';
import Button from '../common/Button';
import AddReviewModal from './AddReviewModal';
import Review from './Review';
import ReviewsHeader from './ReviewsHeader';

// hooks

// styles
import styles from '@styles/ReviewsStyles';

const Reviews = ({ reviews, newReview, skatepark }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <AddReviewModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newReview={newReview}
      />
      <Button
        title="Add Review"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <View style={styles.container}>
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
          <Text style={styles.noReviewsText}>No reviews yet</Text>
        )}
      </View>
    </>
  );
};

export default Reviews;
