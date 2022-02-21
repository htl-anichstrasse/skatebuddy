// librarys
import React from 'react';
import { View, Pressable, Image, Dimensions } from 'react-native';

// components
import EntryHeader from './EntryHeader';
import EntryDirections from './EntryDirections';

// hooks

// styles
import styles from '../../../styles/SkateparksStyles';
import gStyles from '../../../styles/GlobalStyles';

const SkateparkEntry = ({
  skatepark,
  navigation,
  location,
  locLoading,
  locError,
}) => {
  let url = 'https://skate-buddy.josholaus.com/api/skateparkpictures/';
  url += skatepark.pictureIds[0].skateparkId;
  url += '/';
  url += skatepark.pictureIds[0].picId;

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('SkateparkDetails', {
          skatepark,
          scroll: null,
        });
      }}
    >
      <View style={[styles.entryContainer, gStyles.shadow]}>
        <EntryHeader skatepark={skatepark} navigation={navigation} />
        <EntryDirections
          skatepark={skatepark}
          location={location}
          locLoading={locLoading}
          locError={locError}
        />

        {/* 

    return (
      <Image
        source={{
          uri: url,
          width: Dimensions.get('window').width - 80,
          height: 200,
        }}
        style={{
          flex: 1,
        }}
      />
    );
  }; */}
        <Image
          source={{
            uri: url,
            width: Dimensions.get('window').width - 40,
            height: (Dimensions.get('window').width - 40) * (9 / 16),
          }}
          style={styles.entryImage}
        />
      </View>
    </Pressable>
  );
};

export default SkateparkEntry;
