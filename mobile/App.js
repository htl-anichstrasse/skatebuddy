import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './routes/BottomTabsNavigator';
import SplashScreen from './screens/SplashScreen';
import LoginSignupStack from './routes/LoginSignupStack';

const App = () => {
  // ! TODO - Verify jwt

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 1);
  }, []);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabsNavigator /> : <LoginSignupStack />}
    </NavigationContainer>
  );
};

export default App;
