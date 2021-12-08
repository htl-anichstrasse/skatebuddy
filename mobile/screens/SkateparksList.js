import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import SkateparkEntry from '../components/SkateparkEntry';
import styles from '../styles/SkateparksStyles';

import useSkateparks from '../hooks/useSkateparks';

const SkateparksScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [skateparks, setSkateparks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    useSkateparks(setSkateparks, setIsLoading);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
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
