import React from 'react';
import { View, Text, Pressable, Image, Dimensions } from 'react-native';

import useFetch from '../../hooks/useFetch';

import styles from '../../styles/SkateparksStyles';
import { skateparksImages } from '../../styles/Images';

const SkateparkEntry = ({ skatepark, navigation }) => {
  const {
    data: reviews,
    isLoading,
    error,
  } = useFetch('reviews', skatepark.skateparkId);

  let averageRating = 0;

  if (reviews) {
    reviews.forEach(element => {
      averageRating += element.rating;
    });
    averageRating =
      Math.round((averageRating / reviews.length + Number.EPSILON) * 10) / 10;
  }

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
