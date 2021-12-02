import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Map from "../screens/Map";
import Profile from "../screens/Profile";
import Skateparks from "../screens/Skateparks";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Skateparks" component={Skateparks} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
