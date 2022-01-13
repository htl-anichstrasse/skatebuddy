// libraries
import React from 'react';
import { View, Pressable } from 'react-native';

// components
import Text from './Text';

// styles
import styles from '../../styles/ButtonStyles';

const Button = ({ title, onPress }) => {
  if (!title) {
    title = 'Button';
  }

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
