import React, { useState, useEffect } from 'react';
import { View, ScrollView, RefreshControl, Pressable } from 'react-native';
import Button from '../components/common/Button';

import SkateparkEntry from '../components/Skateparks/SkateparkEntry';
import LoadingCircle from '../components/common/LoadingCircle';
import LocationError from '../components/common/LocationError';

import styles from '../styles/SkateparksStyles';
import gStyles from '../styles/GlobalStyles';

import useFetch from '../hooks/useFetch';
import useLocation from '../hooks/useLocation';

const SkateparksList = ({ navigation }) => {
  const { data: skateparks, isLoading, error } = useFetch('skateparks');
  const [refreshing, setRefreshing] = useState(false);

  const { location, locError, getLocation } = useLocation();

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {locError && (
        <Pressable
          onPress={() => {
            getLocation();
          }}
        >
          <LocationError locError={locError} />
        </Pressable>
      )}
      <Button
        title="getLocation"
        onPress={() => {
          console.log(location);
          console.log(locError);
        }}
      />
      {isLoading && <LoadingCircle style={gStyles.LoadingCircle} />}
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
          }
        >
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
