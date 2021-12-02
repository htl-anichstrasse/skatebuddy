import React from 'react';
import { View, Text } from 'react-native';

const SkateparkEntry = ({ data }) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default SkateparkEntry;
