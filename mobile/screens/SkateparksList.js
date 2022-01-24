// librarys
import React, { useState, useEffect, useReducer } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

// components
import Text from '../components/common/Text';
import SkateparkEntry from '../components/SkateparksList/Entry/SkateparkEntry';
import SkateparksListSettings from '../components/SkateparksList/SkateparksListSettings';
import LocationError from '../components/SkateparksList/LocationError';
import LocationLoading from '../components/SkateparksList/LocationLoading';
import LoadingCircle from '../components/common/LoadingCircle';

// hooks
import useFetch from '../hooks/useFetchApi';
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
  }
};

const SkateparksList = ({ navigation }) => {
  const {
    data: skateparks,
    isLoading,
    error,
    changeData: setSkateparks,
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
          {/* // * use this button to log the durations and save them in useFetch to avoid API call
              // TODO CACHING
           <Button
            title="Log skateparks"
            onPress={() => {
              skateparks.forEach(skatepark => {
                console.log(skatepark.durations);
              });
            }}
          /> */}
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
            renderItem={({ item }) => {
              return (
                <SkateparkEntry
                  skatepark={item}
                  navigation={navigation}
                  location={location}
                />
              );
            }}
            // ! item.skateparkId
            keyExtractor={item => item.id}
            // TODO refreshControl={}
          />
        </>
      )}
    </View>
  );
};

export default SkateparksList;
