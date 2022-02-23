// libraries
import React from 'react';
import { Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// components
import Text from './Text';

// hooks

// styles
import styles from '@styles/GlobalStyles';

const SendButton = ({
  onPress,
  title,
  icon,
  iconType,
  style,
  iconSize = 24,
}) => (
  <Pressable
    onPress={onPress}
    style={[styles.buttonContainer, styles.shadow, style]}
  >
    <Text style={styles.buttonText}>{title}</Text>

    {icon && iconType === 'mci' && (
      <MaterialCommunityIcons
        name={icon}
        size={iconSize}
        color={styles.buttonText.color}
      />
    )}
    {icon && iconType === 'mi' && (
      <MaterialIcons
        name={icon}
        size={iconSize}
        color={styles.buttonText.color}
      />
    )}
    {icon && iconType === 'ii' && (
      <Ionicons name={icon} size={iconSize} color={styles.buttonText.color} />
    )}
  </Pressable>
);

export default SendButton;
