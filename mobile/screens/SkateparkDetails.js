import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

const SkateparkDetails = ({ navigation, route }) => {
  const skatepark = route.params.skatepark;

  return (
    <View>
      <Text>SkateparkDetails {skatepark.name}</Text>
      <Text>{skatepark.latitude}</Text>
      <Text>{skatepark.longitude}</Text>

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SkateparkDetails;