import React, { useState, useReducer } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Button from '../components/common/Button';

const RenderPerson = ({ person }) => {
  person = person ?? { name: 'Name', age: 'Age', number: 'Number' };

  return (
    <View style={styles.row}>
      <Text>{person.name}</Text>
      <Text>{person.age}</Text>
      <Text>{person.number}</Text>
    </View>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_NAME_ASC':
      return {
        ...state,
        sortBy: 'name',
        sortDirection: 'asc',
        people: state.people.sort((a, b) => a.name.localeCompare(b.name)),
      };
    case 'SORT_BY_NAME_DESC':
      return {
        ...state,
        sortBy: 'name',
        sortDirection: 'desc',
        people: state.people.sort((a, b) => b.name.localeCompare(a.name)),
      };
    case 'SORT_BY_AGE_ASC':
      return {
        ...state,
        sortBy: 'age',
        sortDirection: 'asc',
        people: state.people.sort((a, b) => a.age - b.age),
      };
    case 'SORT_BY_AGE_DESC':
      return {
        ...state,
        sortBy: 'age',
        sortDirection: 'desc',
        people: state.people.sort((a, b) => b.age - a.age),
      };
    case 'SORT_BY_NUMBER_ASC':
      return {
        ...state,
        sortBy: 'number',
        sortDirection: 'asc',
        people: state.people.sort((a, b) => a.number - b.number),
      };
    case 'SORT_BY_NUMBER_DESC':
      return {
        ...state,
        sortBy: 'number',
        sortDirection: 'desc',
        people: state.people.sort((a, b) => b.number - a.number),
      };
    default:
      return state;
  }
};

const initialState = {
  people: [
    {
      id: 1,
      name: 'Alpha',
      age: 31,
      number: 12,
    },
    {
      id: 2,
      name: 'Bravo',
      age: 48,
      number: 50,
    },
    {
      id: 3,
      name: 'Charlie',
      age: 76,
      number: 69,
    },
    {
      id: 4,
      name: 'Delta',
      age: 60,
      number: 22,
    },
    {
      id: 5,
      name: 'Echo',
      age: 18,
      number: 11,
    },
  ],
  sortBy: 'name',
  sortDirection: 'asc',
};

const SortingTest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Button
        title="Sort by name"
        onPress={() => {
          if (state.sortBy == 'name' && state.sortDirection === 'asc') {
            dispatch({ type: 'SORT_BY_NAME_DESC' });
          } else {
            dispatch({ type: 'SORT_BY_NAME_ASC' });
          }
        }}
      />

      <Button
        title="Sort by Age"
        onPress={() => {
          if (state.sortBy == 'age' && state.sortDirection === 'asc') {
            dispatch({ type: 'SORT_BY_AGE_DESC' });
          } else {
            dispatch({ type: 'SORT_BY_AGE_ASC' });
          }
        }}
      />

      <Button
        title="Sort by number"
        onPress={() => {
          if (state.sortBy == 'number' && state.sortDirection === 'asc') {
            dispatch({ type: 'SORT_BY_NUMBER_DESC' });
          } else {
            dispatch({ type: 'SORT_BY_NUMBER_ASC' });
          }
        }}
      />

      <Text>
        {state.sortBy} {state.sortDirection}
      </Text>
      <RenderPerson />

      <FlatList
        data={state.people}
        renderItem={({ item }) => <RenderPerson person={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default SortingTest;
