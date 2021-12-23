import React, { useEffect } from 'react';
import { View, Text, Pressable, Image, Dimensions } from 'react-native';
import Button from '../common/Button';

import useFetch from '../../hooks/useFetch';
import useDirections from '../../hooks/useDirections';

import styles from '../../styles/SkateparksStyles';
import { skateparksImages } from '../../styles/Images';

const calculateAvgRating = reviews => {
  let total = 0;
  reviews.forEach(review => {
    total += review.rating;
  });
  return Math.round((total / reviews.length + Number.EPSILON) * 10) / 10;
};

const SkateparkEntry = ({ skatepark, navigation, location, distanceMode }) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useFetch('reviews', skatepark.skateparkId);

  let averageRating;

  if (reviews) {
    averageRating = calculateAvgRating(reviews);
  }

  useEffect(() => {
    if (location) {
      useDirections(location, skatepark);
    }
  }, [location]);

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

        <Image
          style={styles.entryImage}
          source={skateparksImages[skatepark.skateparkId].main}
        />
      </View>
    </Pressable>
  );
};

export default SkateparkEntry;
