import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';

import Header from '../components/common/Header';
import Home from '../screens/Home';
import MapScreen from '../screens/MapScreen';
import Profile from '../screens/Profile';
import SkateparksStack from './SkateparksStack';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={{
        header: ({ route, options }) => {
          const title = getHeaderTitle(options, route.name);
          return <Header title={title} />;
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Skateparks" component={SkateparksStack} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
