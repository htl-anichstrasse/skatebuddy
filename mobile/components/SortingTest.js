import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import Button from '../components/common/Button';

const RenderPerson = ({ person }) => {
  return (
    <View style={styles.row}>
      <Text>{person.name}</Text>
      <Text>{person.age}</Text>
      <Text>{person.number}</Text>
    </View>
  );
};

const SortingTest = () => {
  const [people, setPeople] = useState([
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
  ]);

  return (
    <>
      <Button
        title="Sort by name"
        onPress={() => {
          setPeople(
            people.sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            }),
          );
        }}
      />
      <Button
        title="Sort by age"
        onPress={() => {
          setPeople(
            people.sort((a, b) => {
              if (a.age < b.age) {
                return -1;
              }
              if (a.age > b.age) {
                return 1;
              }
              return 0;
            }),
          );
        }}
      />
      <Button
        title="Sort by number"
        onPress={() => {
          setPeople(
            people.sort((a, b) => {
              if (a.number < b.number) {
                return -1;
              }
              if (a.number > b.number) {
                return 1;
              }
              return 0;
            }),
          );
        }}
      />

      <FlatList
        data={people}
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

/*


  const [doSortByName, setDoSortByName] = useState(true);
  const [doSortByAge, setDoSortByAge] = useState(false);
  const [doSortByNumber, setDoSortByNumber] = useState(false);

  const sortByAge = (a, b) => a.age - b.age;
  const sortByName = (a, b) => a.name.localeCompare(b.name);
  const sortByNumber = (a, b) => a.number - b.number;

  return (
    <View>
      <Button
        title="Sort by Name"
        onPress={() => {
          setDoSortByName(true);
          setDoSortByAge(false);
          setDoSortByNumber(false);
        }}
      />
      <Button
        title="Sort by Age"
        onPress={() => {
          setDoSortByName(false);
          setDoSortByAge(true);
          setDoSortByNumber(false);
        }}
      />
      <Button
        title="Sort by Number"
        onPress={() => {
          setDoSortByName(false);
          setDoSortByAge(false);
          setDoSortByNumber(true);
        }}
      />
      <View style={styles.row}>
        <Text>Name</Text>
        <Text>Age</Text>
        <Text>Number</Text>
      </View>
      {doSortByName
        ? people
            .sort(sortByName)
            .map(person => <RenderPerson key={person.id} person={person} />)
        : doSortByAge
        ? people
            .sort(sortByAge)
            .map(person => <RenderPerson key={person.id} person={person} />)
        : doSortByNumber
        ? people
            .sort(sortByNumber)
            .map(person => <RenderPerson key={person.id} person={person} />)
        : null}

        
*/
