import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';

import * as Keychain from 'react-native-keychain';

import Button from '../../components/common/Button';
import {
  useAuthContext,
  useAuthContextState,
} from '../../contexts/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('test1');

  const { signIn } = useAuthContext();
  const state = useAuthContextState();

  return (
    <View>
      <Text>Username</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        textContentType="password"
      />

      <Button title="Sign in" onPress={() => signIn({ username, password })} />
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

export default LoginScreen;
