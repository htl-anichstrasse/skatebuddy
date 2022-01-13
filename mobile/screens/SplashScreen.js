// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '../components/common/Text';
import Logo from '../components/common/Logo';

// styles
import styles from '../styles/GlobalStyles';

const SplashScreen = () => {
  return (
    <View style={styles.splashScreenContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.splashScreenTextContainer}>
        <Text style={styles.splashScreenText}>Skate</Text>
        <Text style={styles.splashScreenTextColor}>Bubatz</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
