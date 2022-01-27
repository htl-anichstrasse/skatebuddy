import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SkateparksList from '../screens/SkateparksList';
import SkateparkDetails from '../screens/SkateparkDetails';

const Stack = createNativeStackNavigator();

const SkateparksStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SkateparksList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SkateparksList" component={SkateparksList} />
      <Stack.Screen name="SkateparkDetails" component={SkateparkDetails} />
    </Stack.Navigator>
  );
};

export default SkateparksStack;
