import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from '../../styles/LoginSignupStyles';
import gStyles from '../../styles/GlobalStyles';

const LoginButton = ({ handleSubmit }) => {
  return (
    <Pressable onPress={handleSubmit}>
      <View style={[styles.loginButtonContainer, gStyles.shadow]}>
        <Text style={styles.loginButtonText}>Login</Text>
        <Ionicons
          name="log-in-outline"
          size={24}
          color={styles.loginButtonText.color}
          style={{ marginLeft: 5 }}
        />
      </View>
    </Pressable>
  );
};

export default LoginButton;
