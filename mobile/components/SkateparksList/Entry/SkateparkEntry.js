// librarys
import React, { useState, useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';

// components
import EntryHeader from './EntryHeader';
import EntryDirections from './EntryDirections';

// hooks

// styles
import styles from '../../../styles/SkateparksStyles';
import gStyles from '../../../styles/GlobalStyles';
import { skateparksImages } from '../../../styles/Images';

const SkateparkEntry = ({
  skatepark,
  navigation,
  location,
  locLoading,
  locError,
}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SkateparkDetails', { skatepark: skatepark });
      }}
    >
      <View style={[styles.entryContainer, gStyles.shadow]}>
        <EntryHeader skatepark={skatepark} />
        <EntryDirections
          skatepark={skatepark}
          location={location}
          locLoading={locLoading}
          locError={locError}
        />

        <Image
          style={styles.entryImage}
          source={skateparksImages[skatepark.skateparkId].main}
        />
      </View>
    </Pressable>
  );
};

export default SkateparkEntry;
