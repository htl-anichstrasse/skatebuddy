import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './contexts/AuthContext';
import AuthHandler from './screens/AuthHandler';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthHandler />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
