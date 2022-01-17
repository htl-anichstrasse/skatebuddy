// libraries
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SkateparksStack from './SkateparksStack';

// styles
import Colors from '../styles/Colors';

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
              iconName = focused ? 'account-circle' : 'account-circle-outline';
              break;
            default:
              iconName = 'react';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        },
        tabBarActiveTintColor: Colors.primary, // Jade
        tabBarInactiveTintColor: Colors.gray2,
        tabBarActiveBackgroundColor: Colors.primarySoft,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Skateparks" component={SkateparksStack} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
