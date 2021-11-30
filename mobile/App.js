import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./routes/BottomTabsNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default App;
