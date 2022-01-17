// libraries
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

// components
import Text from '../../common/Text';
import Button from '../../common/Button';
import AddReviewModal from './AddReviewModal';
import Review from './Review';

// hooks

// styles
import styles from '../../../styles/ReviewsStyles';

const Reviews = ({ reviews, newReview }) => {
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
        <Text style={styles.headerText}>Anzahl Reviews: {reviews.length}</Text>
        <View style={styles.reviewsContainer}>
          {reviews.map(review => (
            <Review key={review.reviewId} review={review} />
          ))}
        </View>
      </View>
    </>
  );
};

export default Reviews;
