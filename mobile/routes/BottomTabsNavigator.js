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
        tabBarActiveTintColor: '#00A86B', // Jade
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#99ffda', // Jade Edit HSV Saturation 40% Value 100%
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen
        name="Skateparks"
        component={SkateparksStack}
        options={{
          tabBarActiveTintColor: '#008690',
          tabBarActiveBackgroundColor: '#99f8ff',
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarActiveTintColor: '#007994',
          tabBarActiveBackgroundColor: '#99ecff',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: '#006B93',
          tabBarActiveBackgroundColor: '#99e3ff',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
