// librarys
import React from 'react';
import { View, Text } from 'react-native';
import * as Keychain from 'react-native-keychain';

// components
import Button from '../components/common/Button';

// styles
import styles from '../styles/ProfileStyles';

// hooks / contexts
import { useAuthContext, useAuthContextState } from '../contexts/AuthContext';

const ProfileScreen = () => {
  const { signOut } = useAuthContext();
  const state = useAuthContextState();

  return (
    <View style={styles.container}>
      <Text>Signed in</Text>
      <Button title="signout" onPress={signOut}></Button>
      <Button
        title="Print auth state"
        onPress={() => {
          console.log('AuthContextState: ', state);
          Keychain.getInternetCredentials('jwt').then(creds => {
            console.log('Keychain: ', creds);
          });
        }}
      />
    </View>
  );
};

export default ProfileScreen;
