import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';

import Header from '../components/common/Header';
import SkateparksList from '../screens/SkateparksList';
import SkateparkDetails from '../screens/SkateparkDetails';
import NewReview from '../screens/NewReview';

const Stack = createNativeStackNavigator();

const SkateparksStack = () => {
  return (
    <Stack.Navigator initialRouteName="SkateparksList">
      <Stack.Screen name="SkateparksList" component={SkateparksList} />
      <Stack.Screen name="SkateparkDetails" component={SkateparkDetails} />
      <Stack.Screen name="NewReview" component={NewReview} />
    </Stack.Navigator>
  );
};

export default SkateparksStack;
