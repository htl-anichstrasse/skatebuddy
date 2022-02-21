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
  const tabBarIcons = (route, focused, color) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Skateparks':
        iconName = 'map-marker-radius';
        break;
      case 'Map':
        iconName = 'map-search';
        break;
      case 'Profile':
        iconName = 'account-circle';
        break;
      default:
        iconName = 'alert-circle';
        break;
    }

    if (!focused) {
      iconName += '-outline';
    }

    return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
  };

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName="Skateparks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => tabBarIcons(route, focused, color),
        tabBarActiveTintColor: Colors.primary,
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
