import React, { useState, useContext } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../components/common/Button';
import * as Keychain from 'react-native-keychain';

import { AuthContext } from '../../App';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  return (
    <View>
      <Text>Login</Text>
      <Text>Username</Text>
      <TextInput value={username} onChangeText={setUsername} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} />

      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
};

export default LoginScreen;
