import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SkateparksList from '../screens/SkateparksList';
import SkateparkDetails from '../screens/SkateparkDetails';

const Stack = createNativeStackNavigator();

const SkateparksStack = () => {
  return (
    <Stack.Navigator initialRouteName="SkateparksList">
      <Stack.Screen
        name="SkateparksList"
        component={SkateparksList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SkateparkDetails" component={SkateparkDetails} />
    </Stack.Navigator>
  );
};

export default SkateparksStack;
