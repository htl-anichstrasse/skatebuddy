import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';

import Button from '../components/common/Button';
import LoadingCircle from '../components/common/LoadingCircle';
import AddReviewModal from '../components/Skateparks/SkateparkDetails/AddReviewModal';
import Reviews from '../components/Skateparks/SkateparkDetails/Reviews';

import useFetch from '../hooks/useFetch';

import styles from '../styles/SkateparkDetailsStyles';

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

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>{skatepark.name}</Text>
      <Text>{skatepark.latitude}° N</Text>
      <Text>{skatepark.longitude}° W</Text>

      {skatepark.address != '' ? <Text>{skatepark.address}</Text> : null}

      <View style={styles.coordinates}>
        <Text>Beste Öffi-Verbindung: {skatepark.busStop} </Text>
      </View>

      {isLoading && <LoadingCircle />}
      {error && <Text>Error!</Text>}
      {reviews && (
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
          <Reviews
            reviews={reviews}
            navigation={navigation}
            newReview={newReview}
          />
        </>
      )}
    </View>
  );
};

export default SkateparkDetails;
