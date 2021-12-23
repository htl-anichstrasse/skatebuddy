import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';

import SkateparksListSettings from '../components/Skateparks/SkateparksListSettings';
import SkateparkEntry from '../components/Skateparks/SkateparkEntry';
import LoadingCircle from '../components/common/LoadingCircle';
import LocationError from '../components/Skateparks/LocationError';

import styles from '../styles/SkateparksStyles';

import useFetch from '../hooks/useFetch';
import useLocation from '../hooks/useLocation';
import LocationLoading from '../components/Skateparks/LocationLoading';

const SkateparksList = ({ navigation }) => {
  const { data: skateparks, isLoading, error } = useFetch('skateparks');
  const [refreshing, setRefreshing] = useState(false);

  const { location, locError, locLoading, getLocation } = useLocation();

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {locError && (
        <LocationError getLocation={getLocation} locError={locError} />
      )}
      {locLoading && <LocationLoading />}

      {isLoading && <LoadingCircle />}
      {error && <Text>Error!</Text>}
      {skateparks && (
        <>
          <SkateparksListSettings />
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
        </>
      )}
    </View>
  );
};

export default SkateparksList;
