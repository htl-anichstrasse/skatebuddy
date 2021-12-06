import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import SkateparkEntry from '../components/SkateparkEntry';
import styles from '../styles/SkateparksStyles';

const SkateparksScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [skateparks, setSkateparks] = useState([]);
  const [error, setError] = useState(null);

  const fetchSkateparks = async () => {
    // TODO get skateparks from real API
    setSkateparks([
      {
        skateparkId: 1,
        name: 'Skatepark Rum Sane Plaza',
        latitude: '47.268467',
        longitude: 11.447938,
      },
      {
        skateparkId: 2,
        name: 'Skatepark Tivoli',
        latitude: 47.2587839,
        longitude: 11.4075082,
      },
    ]);

    await new Promise(r => setTimeout(r, 2000));
    setIsLoading(false);

    /*
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        setData(json.movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    */
  };

  useEffect(() => {
    fetchSkateparks();
  }, []);

  const renderItem = ({ item }) => (
    <SkateparkEntry skatepark={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={skateparks}
          renderItem={renderItem}
          keyExtractor={item => item.skateparkId}
        />
      )}
    </View>
  );
};

export default SkateparksScreen;
