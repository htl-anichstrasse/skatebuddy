import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import Button from '../components/common/Button';
import { AuthContext } from '../App';

import styles from '../styles/HomeStyles';

const Home = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Signed in</Text>
      <Button title="signout" onPress={signOut}></Button>
    </View>
  );
};

export default Home;
