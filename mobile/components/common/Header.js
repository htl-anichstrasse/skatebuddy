import React from 'react';
import { View, Text, DevSettings, Pressable } from 'react-native';
import styles from '../../styles/HeaderStyles';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => DevSettings.reload()}>
        <Text style={styles.reload}>Reload</Text>
      </Pressable>
    </View>
  );
};

export default Header;
