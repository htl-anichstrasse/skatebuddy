import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginSignup/LoginScreen';
import SignupScreen from '../screens/LoginSignup/SignupScreen';
import ForgotPasswordScreen from '../screens/LoginSignup/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

const LoginSignupStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default LoginSignupStack;
