// librarys
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';

// components
import DirectionsMethod from './DirectionsMethod';
import Button from '../common/Button';

// hooks
import useFetch from '../../hooks/useFetch';
import useDirections from '../../hooks/useDirections';

// styles
import styles from '../../styles/SkateparksStyles';
import gStyles from '../../styles/GlobalStyles';
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

  const { durations, getDurations } = useDirections(location, skatepark);

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
        <View style={styles.titleContainer}>
          <Text style={styles.entryName}>{skatepark.name}</Text>
          <View style={[styles.entryRatingContainer, gStyles.shadow]}>
            {averageRating ? (
              <Text style={styles.entryRatingText}>{averageRating} ⭐</Text>
            ) : (
              <Text style={styles.entryRatingText}>No ratings</Text>
            )}
          </View>
        </View>
        <View style={styles.entryDirectionsContainer}>
          {durations === [] ? (
            <Text style={styles.entryDirectionsText}>Loading...</Text>
          ) : (
            durations.map((duration, index) => {
              const colors = ['#009E7B', '#009288', '#008690', '#007994'];
              const icons = ['walking', 'bicycle', 'bus', 'car'];
              return (
                <DirectionsMethod
                  key={index}
                  icon={icons[index]}
                  color={colors[index]}
                  duration={duration}
                  index={index}
                />
              );
            })
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
