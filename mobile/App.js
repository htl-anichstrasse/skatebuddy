import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './screens/SplashScreen';
import LoginSignupStack from './routes/LoginSignupStack';
import BottomTabsNavigator from './routes/BottomTabsNavigator';

export const AuthContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isLoading ? (
          // We haven't finished checking for the token yet
          <SplashScreen />
        ) : state.userToken == null ? (
          // No token found, user isn't signed in
          <LoginSignupStack />
        ) : (
          // User is signed in
          <BottomTabsNavigator />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

// import React, { useState, useMemo, useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import * as Keychain from 'react-native-keychain';

// import BottomTabsNavigator from './routes/BottomTabsNavigator';
// import SplashScreen from './screens/SplashScreen';
// import LoginSignupStack from './routes/LoginSignupStack';

// export const AuthContext = React.createContext();

// const App = () => {
//   const authReducer = (state, action) => {
//     switch (action.type) {
//       case 'RESTORE_TOKEN':
//         return {
//           ...state,
//           userToken: action.token,
//           isLoading: false,
//         };
//       case 'SIGN_IN':
//         return {
//           ...state,
//           userToken: action.token,
//         };
//       case 'SIGN_OUT':
//         return {
//           ...state,
//           userToken: null,
//         };
//     }
//   };

//   const [state, dispatch] = useReducer(authReducer, {
//     isLoading: true,
//     userToken: null,
//   });

//   useEffect(() => {
//     const restoreToken = async () => {
//       let userToken;

//       try {
//         userToken = await Keychain.getInternetCredentials("jwt");
//       } catch (e) {
//         userToken = null;
//       }

//       dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//     };

//     restoreToken();
//   }, []);

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async data => {
//         // In a production app, we need to send some data (usually username, password) to server and get a token
//         // We will also need to handle errors if sign in failed
//         // After getting token, we need to persist the token using `SecureStore`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//       signOut: () => dispatch({ type: 'SIGN_OUT' }),
//       signUp: async data => {
//         // In a production app, we need to send user data to server and get a token
//         // We will also need to handle errors if sign up failed
//         // After getting token, we need to persist the token using `SecureStore`
//         // In the example, we'll use a dummy token

//         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
//       },
//     }),
//     []
//   );

//   return (
//     <NavigationContainer>
//       {isLoading ? (
//         <SplashScreen />
//       ) : userToken == null ? (
//         <LoginSignupStack />
//       ) : (
//         <BottomTabsNavigator />
//       )}
//     </NavigationContainer>
//   );
// };

// export default App;
