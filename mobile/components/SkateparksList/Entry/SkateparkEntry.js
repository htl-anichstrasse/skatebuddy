// librarys
import React, { useState, useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';

// components
import EntryHeader from './EntryHeader';
import EntryDirections from './EntryDirections';

// hooks
import useDirections from '../../../hooks/useDirections';

// styles
import styles from '../../../styles/SkateparksStyles';
import gStyles from '../../../styles/GlobalStyles';
import { skateparksImages } from '../../../styles/Images';

const SkateparkEntry = ({ skatepark, navigation, location }) => {
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
          // ! skatepark.skateparkId
          source={skateparksImages[skatepark.id].main}
        />
      </View>
    </Pressable>
  );
};

export default SkateparkEntry;
