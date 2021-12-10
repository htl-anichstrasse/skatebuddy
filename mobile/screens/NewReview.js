import React from 'react';
import { View, Text } from 'react-native';

import Button from '../components/Button';

const NewReview = ({ navigation, route }) => {
  const skateparkId = route.params.skateparkId;

  return (
    <View>
      <Text>New Review for Skatepark {skateparkId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Add new Review"
        onPress={() => {
          route.params.reviews.push({
            reviewId: 4,
            userId: 2,
            skateparkId: skateparkId,
            rating: 4,
            title: 'neue review',
            content: 'heeuuuu',
          });
        }}
      />
    </View>
  );
};

export default NewReview;
