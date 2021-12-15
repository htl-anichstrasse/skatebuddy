import React, { useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';

import SkateparkEntry from '../components/Skateparks/SkateparkEntry';
import LoadingCircle from '../components/common/LoadingCircle';

import styles from '../styles/SkateparksStyles';

import useFetch from '../hooks/useFetch';

const SkateparksList = ({ navigation }) => {
  const { data: skateparks, isLoading, error } = useFetch('skateparks');
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      {isLoading && <LoadingCircle />}
      {error && <Text>Error!</Text>}
      {skateparks && (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                setRefreshing(false);
              }}
            />
          }>
          {skateparks.map(skatepark => (
            <SkateparkEntry
              key={skatepark.skateparkId}
              skatepark={skatepark}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SkateparksList;
