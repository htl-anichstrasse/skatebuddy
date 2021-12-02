import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Skateparks from '../screens/Skateparks';
import SkateparkDetails from '../screens/SkateparkDetails';

const Stack = createNativeStackNavigator();

const SkateparksStack = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getSkateparks = async () => {
    try {
      const response = await fetch('http://localhost:3000/skateparks');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSkateparks();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Stack.Navigator
          initialRouteName="Skateparks"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Skateparks" component={Skateparks} />
          <Stack.Screen name="SkateparkDetails" component={SkateparkDetails} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default SkateparksStack;
