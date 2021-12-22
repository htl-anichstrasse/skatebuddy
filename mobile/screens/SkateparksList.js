import React, { useState, useEffect } from 'react';
import { View, ScrollView, RefreshControl, Pressable } from 'react-native';

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

  let { location, error: locError } = useLocation();

  return (
    <View style={styles.container}>
      {locError ? (
        <Pressable
          onPress={() => {
            console.log('Location Error');
            console.log(locError);
          }}
        >
          <LocationError locError={locError} />
        </Pressable>
      ) : null}
      {isLoading && <LoadingCircle style={gStyles.LoadingCircle} />}
      {/* {error && <Text>Error!</Text>} */}
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
              location={location}
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
