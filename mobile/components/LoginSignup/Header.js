// libraries
import React from 'react';
import { View, Text } from 'react-native';

// styles
import styles from '../../styles/LoginSignupStyles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Skate</Text>
      <Text style={styles.headerTextColor}>Bubatz</Text>
    </View>
  );
};

export default Header;
