// librarys
import React, { useState, useEffect, useReducer } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

// components
import SkateparkEntry from '../components/SkateparksList/Entry/SkateparkEntry';
import SkateparksListSettings from '../components/SkateparksList/SkateparksListSettings';
import LocationError from '../components/SkateparksList/LocationError';
import LocationLoading from '../components/SkateparksList/LocationLoading';
import LoadingCircle from '../components/common/LoadingCircle';
import Error from '@components/common/Error';

// hooks
import useFetch from '../hooks/useFetch';
import useLocation from '../hooks/useLocation';

// styles
import styles from '../styles/SkateparksStyles';

const initialState = {
  sortBy: '',
  sortDirection: 'asc',
};

const translateMethod = method => {
  switch (method) {
    case 'walking':
      return 0;
    case 'bicycling':
      return 1;
    case 'transit':
      return 2;
    case 'driving':
      return 3;
    default:
      return -1;
  }
};

const SkateparksList = ({ navigation }) => {
  const {
    data: skateparks,
    isLoading,
    error,
    changeData: setSkateparks,
    refreshData,
  } = useFetch('https://skate-buddy.josholaus.com/api/skateparks');
  const { location, locError, locLoading, getLocation } = useLocation();

  const reducer = (state, action) => {
    let index;

    switch (action.type) {
      case 'SORT_ASC':
        index = translateMethod(action.method);
        setSkateparks(
          skateparks.sort(
            (a, b) => a.durations[index].value - b.durations[index].value,
          ),
        );
        return {
          ...state,
          sortBy: action.method,
          sortDirection: 'asc',
        };
      case 'SORT_DESC':
        index = translateMethod(action.method);
        setSkateparks(
          skateparks.sort(
            (a, b) => b.durations[index].value - a.durations[index].value,
          ),
        );
        return {
          ...state,
          sortBy: action.method,
          sortDirection: 'desc',
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      await getLocation();
    };
    fetchLocation();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      {locError && (
        <LocationError getLocation={getLocation} locError={locError} />
      )}
      {locLoading && locError == null && <LocationLoading />}

      {isLoading && <LoadingCircle />}
      {error && <Error error={error} refresh={refreshData} />}
      {skateparks && (
        <>
          <SkateparksListSettings
            state={state}
            dispatch={dispatch}
            searchString={searchString}
            setSearchString={setSearchString}
          />
          <FlatList
            data={skateparks.filter(skatepark => {
              const name = skatepark.name.toLowerCase();
              return name.includes(searchString.toLowerCase());
            })}
            extraData={state}
            renderItem={({ item }) => (
              <SkateparkEntry
                skatepark={item}
                navigation={navigation}
                location={location}
                locLoading={locLoading}
                locError={locError}
              />
            )}
            keyExtractor={item => item.skateparkId}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={async () => {
                  setRefreshing(true);
                  refreshData();
                  await getLocation();
                  setRefreshing(false);
                }}
              />
            }
          />
        </>
      )}
    </View>
  );
};

export default SkateparksList;
