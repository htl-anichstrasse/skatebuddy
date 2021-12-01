import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../styles/ButtonStyles";

const Button = ({ title, onPress, color }) => {
  if (color) {
    styles.container = {
      ...styles.container,
      backgroundColor: color,
    };
  }

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
