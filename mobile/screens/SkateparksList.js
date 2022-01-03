// librarys
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';

// components
import SkateparksListSettings from '../components/Skateparks/SkateparksListSettings';
import SkateparkEntry from '../components/Skateparks/SkateparkEntry';

import LoadingCircle from '../components/common/LoadingCircle';
import LocationError from '../components/Skateparks/LocationError';
import LocationLoading from '../components/Skateparks/LocationLoading';

// styles
import styles from '../styles/SkateparksStyles';

// hooks
import useFetch from '../hooks/useFetch';
import useLocation from '../hooks/useLocation';

const SkateparksList = ({ navigation }) => {
  const {
    data: skateparks,
    isLoading,
    error,
    changeData: setSkateparks,
  } = useFetch('skateparks');
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
            <SkateparksListSettings />
            {skateparks.map(skatepark => (
              <SkateparkEntry
                key={skatepark.skateparkId}
                location={location}
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
