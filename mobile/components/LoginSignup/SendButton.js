// libraries
import React from 'react';
import { View, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color={styles.loginButtonText.color}
      />
    </Pressable>
  );
};

export default SendButton;
