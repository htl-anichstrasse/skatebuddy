import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import SkateparkEntry from '../components/SkateparkEntry';
import styles from '../styles/SkateparksStyles';

import useFetch from '../hooks/useFetch';

const SkateparksScreen = ({ navigation }) => {
  const { data: skateparks, isLoading, error } = useFetch('skateparks');

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator style={styles.loadingCircle} />
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
