// libraries
import React from 'react';
import { View, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import Text from './Text';

// hooks

// styles
import styles from '@styles/GlobalStyles';

const SendButton = ({ onPress, title, icon, iconType, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonContainer, styles.shadow, style]}
    >
      <Text style={styles.buttonText}>{title}</Text>
      {icon && iconType == 'mci' ? (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={styles.buttonText.color}
        />
      ) : icon && iconType == 'ii' ? (
        <IonIcons name={icon} size={24} color={styles.buttonText.color} />
      ) : null}
    </Pressable>
  );
};

export default SendButton;
