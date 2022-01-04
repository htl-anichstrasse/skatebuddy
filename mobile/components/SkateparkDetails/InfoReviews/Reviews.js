import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import Review from './Review';
import Button from '../../common/Button';
import AddReviewModal from './AddReviewModal';

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
          <FlatList
            data={reviews}
            renderItem={({ item }) => <Review review={item} />}
            keyExtractor={item => item.reviewId}
          />
        </View>
      </View>
    </>
  );
};

export default Reviews;
