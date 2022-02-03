// libraries
import React, { useContext, useMemo, useReducer } from 'react';
import * as Keychain from 'react-native-keychain';
import { showMessage } from 'react-native-flash-message';

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
            isLoading: false,
          };
        case 'CURRENT_USER':
          return {
            ...prevState,
            currentUser: action.user,
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
      restoreToken: async token => {
        const res = await fetch(
          'https://skate-buddy.josholaus.com/api/users/validate',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ token: token }),
          },
        );

        if (res.status === 200) {
          authContext.decodeToken(token);
          dispatch({ type: 'RESTORE_TOKEN', token: token });
        } else {
          dispatch({ type: 'SIGN_OUT' });
        }
      },
      signIn: async data => {
        const res = await fetch('https://skate-buddy.josholaus.com/api/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const resJson = await res.json();
        if (resJson.success) {
          const { token } = resJson;
          authContext.decodeToken(token);
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
            duration: 5000,
          });
        }
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
          authContext.decodeToken(token);
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
            duration: 5000,
          });
        }
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
      decodeToken: async token => {
        const res = await fetch(
          'https://skate-buddy.josholaus.com/api/users/decode',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ token: token }),
          },
        );

        if (res.status === 200) {
          const resJson = await res.json();
          console.log(resJson);
          dispatch({ type: 'CURRENT_USER', user: resJson });
        } else {
          dispatch({ type: 'SIGN_OUT' });
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
