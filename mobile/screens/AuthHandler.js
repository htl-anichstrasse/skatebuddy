import React, { useEffect } from 'react';

import SplashScreen from './SplashScreen';
import LoginSignupStack from '../routes/LoginSignupStack';
import BottomTabsNavigator from '../routes/BottomTabsNavigator';
import * as Keychain from 'react-native-keychain';

import { useAuthContext, useAuthContextState } from '../contexts/AuthContext';

const Auth = () => {
  const { restoreToken } = useAuthContext();
  const state = useAuthContextState();

  useEffect(() => {
    const checkForValidToken = async () => {
      let token = null;

      try {
        if (await Keychain.hasInternetCredentials('jwt')) {
          const creds = await Keychain.getInternetCredentials('jwt');
          token = creds.password;
        }
      } catch (e) {
        // Restoring token failed
        console.log(e);
      }
      restoreToken(token);
    };

    checkForValidToken();
  }, []);

  return (
    <>
      {state.isLoading ? (
        <SplashScreen />
      ) : state.userToken == null ? (
        <LoginSignupStack />
      ) : (
        <BottomTabsNavigator />
      )}
    </>
  );
};

export default Auth;
