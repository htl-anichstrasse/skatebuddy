import React from 'react';
import { View, FlatList } from 'react-native';

import SkateparkEntry from '../components/SkateparkEntry';
import styles from '../styles/SkateparksStyles';

const Skateparks = ({ navigation }) => {
  const skateparks = [
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
  ];

  const renderItem = ({ item }) => (
    <SkateparkEntry skatepark={item} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={skateparks}
        renderItem={renderItem}
        keyExtractor={item => item.skateparkId}
      />
    </View>
  );
};

export default Skateparks;
