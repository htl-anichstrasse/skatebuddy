import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SkateparksList from '../screens/SkateparksList';
import SkateparkDetails from '../screens/SkateparkDetails';
import NewReview from '../screens/NewReview';

const Stack = createNativeStackNavigator();

const SkateparksStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Skateparks"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SkateparksList" component={SkateparksList} />
      <Stack.Screen name="SkateparkDetails" component={SkateparkDetails} />
      <Stack.Screen name="NewReview" component={NewReview} />
    </Stack.Navigator>
  );
};

export default SkateparksStack;
