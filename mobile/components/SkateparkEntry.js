import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import styles from '../styles/SkateparksStyles';
import { skateparksImages } from '../styles/Images';

const SkateparkEntry = ({ skatepark, navigation }) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SkateparkDetails', { skatepark: skatepark });
      }}>
      <View style={styles.entryContainer}>
        <Text style={styles.entryName}>{skatepark.name}</Text>
        <Text>{skatepark.latitude}</Text>
        <Text>{skatepark.longitude}</Text>
        <Image
          style={styles.entryImage}
          source={skateparksImages[skatepark.skateparkId].main}
        />
      </View>
    </Pressable>
  );
};

export default SkateparkEntry;
