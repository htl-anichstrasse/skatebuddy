import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

const SkateparkDetails = ({ navigation, route }) => {
  return (
    <View>
      <Text>SkateparkDetails {route.params.test}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SkateparkDetails;
