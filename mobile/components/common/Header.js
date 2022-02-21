// libraries
import React from 'react';
import { View, DevSettings, Pressable } from 'react-native';

// components
import Text from './Text';

// hooks

// styles
import styles from '../../styles/HeaderStyles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Pressable onPress={() => DevSettings.reload()}>
      <Text style={styles.reload}>Reload</Text>
    </Pressable>
  </View>
);

export default Header;
