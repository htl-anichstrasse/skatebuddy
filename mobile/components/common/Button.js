import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from '../../styles/ButtonStyles';

const Button = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
