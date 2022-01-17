// libraries
import React from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import Text from '../common/Text';

// hooks

// styles
import styles from '../../styles/LoginSignupStyles';
import gStyles from '../../styles/GlobalStyles';

const SendButton = ({ handleSubmit, text, icon }) => {
  return (
    <Pressable
      onPress={handleSubmit}
      style={[styles.loginButtonContainer, gStyles.shadow]}
    >
      <Text style={styles.loginButtonText}>{text}</Text>
      <Ionicons
        name={icon}
        size={text == 'Login' ? 24 : 20}
        color={styles.loginButtonText.color}
      />
    </Pressable>
  );
};

export default SendButton;
