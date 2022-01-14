// librarys
import React, { useState, useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';

// components
import EntryHeader from './EntryHeader';
import EntryDirections from './EntryDirections';

// hooks
import useFetch from '../../../hooks/useFetch';
import useDirections from '../../../hooks/useDirections';

// styles
import styles from '../../../styles/SkateparksStyles';
import gStyles from '../../../styles/GlobalStyles';
import { skateparksImages } from '../../../styles/Images';

const calculateAvgRating = reviews => {
  let total = 0;
  reviews.forEach(review => {
    total += review.rating;
  });
  return Math.round((total / reviews.length + Number.EPSILON) * 10) / 10;
};

const SkateparkEntry = ({ skatepark, navigation, location }) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useFetch('reviews', skatepark.skateparkId);

  if (reviews) {
    skatepark.averageRating = calculateAvgRating(reviews);
  }

  const { getDurations } = useDirections(location, skatepark);

  useEffect(() => {
    getDurations();
  }, []);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SkateparkDetails', { skatepark: skatepark });
      }}
    >
      <View style={[styles.entryContainer, gStyles.shadow]}>
        <EntryHeader skatepark={skatepark} />
        <EntryDirections skatepark={skatepark} location={location} />

        <Image
          style={styles.entryImage}
          source={skateparksImages[skatepark.skateparkId].main}
        />
      </View>
    </Pressable>
  );
};

export default SkateparkEntry;
