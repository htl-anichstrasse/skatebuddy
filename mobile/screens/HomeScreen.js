import React from 'react';
import { View, Text } from 'react-native';

import Button from '../components/common/Button';
import styles from '../styles/HomeStyles';

import { useAuthContext, useAuthContextState } from '../contexts/AuthContext';
import * as Keychain from 'react-native-keychain';

const Home = () => {
  const { signOut } = useAuthContext();
  const state = useAuthContextState();

  return (
    <View style={styles.container}>
      <Text>Signed in</Text>
      <Button title="signout" onPress={signOut}></Button>
      <Button
        title="Print auth state"
        onPress={() => {
          console.log(state);
          Keychain.getInternetCredentials('jwt').then(creds => {
            console.log(creds);
          });
        }}
      />
    </View>
  );
};

export default Home;
