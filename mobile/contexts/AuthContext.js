// libraries
import React, { useContext, useMemo, useReducer } from 'react';
import * as Keychain from 'react-native-keychain';

// hooks
const AuthContext = React.createContext();
const AuthContextState = React.createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

const useAuthContextState = () => {
  return useContext(AuthContextState);
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
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
      currentUser: null,
    },
  );

  const authContext = useMemo(
    () => ({
      restoreToken: async userToken => {
        setTimeout(() => {
          dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        }, 500);
      },
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        const token = '#+dummy-auth-token12';

        await Keychain.setInternetCredentials('jwt', data.username, token);
        dispatch({ type: 'SIGN_IN', token: token });
      },
      signOut: async () => {
        await Keychain.resetInternetCredentials('jwt');
        dispatch({ type: 'SIGN_OUT' });
      },
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
      <AuthContextState.Provider value={state}>
        {children}
      </AuthContextState.Provider>
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export { useAuthContext };
export { useAuthContextState };
