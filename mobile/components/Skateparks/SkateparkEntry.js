import React from 'react';
import { View, Text, Pressable, Image, Dimensions } from 'react-native';

import useFetch from '../../hooks/useFetch';
import useLocation from '../../hooks/useLocation';

import styles from '../../styles/SkateparksStyles';
import { skateparksImages } from '../../styles/Images';

const SkateparkEntry = ({ skatepark, navigation }) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useFetch('reviews', skatepark.skateparkId);

  let reviewsRatingSum = 0;
  let averageRating;

  if (reviews) {
    reviews.forEach(element => {
      reviewsRatingSum += element.rating;
    });
    averageRating = reviewsRatingSum / reviews.length;
    averageRating = Math.round((averageRating + Number.EPSILON) * 10) / 10;
  }

  const location = useLocation();
  console.log(location);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SkateparkDetails', { skatepark: skatepark });
      }}
    >
      <View style={[styles.entryContainer, styles.shadow]}>
        <View style={styles.titleContainer}>
          <Text style={styles.entryName}>{skatepark.name}</Text>
          {averageRating ? (
            <Text style={styles.entryRating}>{averageRating} ⭐</Text>
          ) : (
            <Text style={styles.entryRating}>No ratings</Text>
          )}
        </View>

        <View></View>

        <Image
          style={styles.entryImage}
          source={skateparksImages[skatepark.skateparkId].main}
        />
      </View>
    </Pressable>
  );
};

export default SkateparkEntry;
