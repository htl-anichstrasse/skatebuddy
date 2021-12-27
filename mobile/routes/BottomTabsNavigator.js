import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SkateparksStack from './SkateparksStack';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName="Skateparks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Skateparks':
              iconName = focused
                ? 'map-marker-radius'
                : 'map-marker-radius-outline';
              break;
            case 'Map':
              iconName = focused ? 'map-search' : 'map-search-outline';
              break;
            case 'Profile':
              iconName = focused ? 'shield-account' : 'shield-account-outline';
              break;
            default:
              iconName = 'react';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
        tabBarActiveTintColor: '#00A86B',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#99ffda',
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Skateparks" component={SkateparksStack} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
