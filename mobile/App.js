import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import { AuthProvider } from './contexts/AuthContext';
import AuthHandler from './screens/AuthHandler';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthHandler />
      </NavigationContainer>
      <FlashMessage position="top" />
    </AuthProvider>
  );
};

export default App;
