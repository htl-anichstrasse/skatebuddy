import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/GlobalStyles';
import Logo from '../components/common/Logo';

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <Logo />
      <Text style={styles.splashScreenText}>Skate Bubatz</Text>
    </View>
  );
};

export default SplashScreen;
