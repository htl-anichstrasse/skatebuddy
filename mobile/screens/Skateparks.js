import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

import SkateparkEntry from '../components/SkateparkEntry';

const Skateparks = ({ navigation }) => {
  return (
    <View>
      <Text>Skateparks</Text>
      <Button
        title="Go to SkateparkDetails"
        onPress={() =>
          navigation.navigate('SkateparkDetails', { test: 'test' })
        }
      />
    </View>
  );
};

export default Skateparks;
