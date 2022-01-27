// libraries
import React, { useContext, useMemo, useReducer } from 'react';
import * as Keychain from 'react-native-keychain';
import { showMessage, hideMessage } from 'react-native-flash-message';

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
        // post request to https://skate-buddy.josholaus.com/api/login
        const res = await fetch('https://skate-buddy.josholaus.com/api/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          const resJson = await res.json();
          const { token } = resJson;
          showMessage({
            message: 'Login erfolgreich',
            type: 'success',
            icon: 'auto',
          });
          await Keychain.setInternetCredentials('jwt', data.email, token);
          dispatch({ type: 'SIGN_IN', token });
        } else {
          showMessage({
            message: 'Login fehlgeschlagen',
            description: 'Möglicherweise falsche Email oder Passwort',
            type: 'danger',
            icon: 'auto',
          });
        }

        // const token = '#+dummy-auth-token12';

        // await Keychain.setInternetCredentials('jwt', data.email, token);
        // dispatch({ type: 'SIGN_IN', token: token });
      },
      signOut: async () => {
        await Keychain.resetInternetCredentials('jwt');
        dispatch({ type: 'SIGN_OUT' });
      },
      signUp: async data => {
        const res = await fetch(
          'https://skate-buddy.josholaus.com/api/register',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        );
        const resJson = await res.json();
        if (resJson.success) {
          const { token } = resJson;
          showMessage({
            message: 'Registrierung erfolgreich',
            type: 'success',
            icon: 'auto',
          });
          await Keychain.setInternetCredentials('jwt', data.email, token);
          dispatch({ type: 'SIGN_IN', token });
        } else {
          showMessage({
            message: 'Registrierung fehlgeschlagen',
            description:
              'Möglicherweise ist dieser Benutzername oder Email schon in Verwendung',
            type: 'danger',
            icon: 'auto',
          });
        }

        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token
        // console.log(data);
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      forgotPassword: async data => {
        const res = await fetch(
          'https://skate-buddy.josholaus.com/api/check/email',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        );
        const resJson = await res.json();
        if (resJson.exists) {
          showMessage({
            message: 'Link wurde an die Email gesendet',
            type: 'success',
            icon: 'auto',
          });
        } else {
          showMessage({
            message: 'Email nicht gefunden',
            description:
              'Möglicherweise existiert diese Email nicht in unserer Datenbank',
            type: 'danger',
            icon: 'auto',
            duration: 5000,
          });
        }
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
