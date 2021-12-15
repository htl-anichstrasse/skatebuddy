import React from 'react';
import { View, FlatList } from 'react-native';

import SkateparkEntry from '../components/SkateparkEntry';
import LoadingCircle from '../components/common/LoadingCircle';

import styles from '../styles/SkateparksStyles';

import useFetch from '../hooks/useFetch';

const SkateparksScreen = ({ navigation }) => {
  const { data: skateparks, isLoading, error } = useFetch('skateparks');

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <FlatList
          data={skateparks}
          renderItem={({ item }) => (
            <SkateparkEntry skatepark={item} navigation={navigation} />
          )}
          keyExtractor={item => item.skateparkId}
        />
      )}
    </View>
  );
};

export default SkateparksScreen;
