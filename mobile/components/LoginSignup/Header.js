// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '../common/Text';

// styles
import styles from '../../styles/LoginSignupStyles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Skate</Text>
      <Text style={styles.headerTextColor}>Buddy</Text>
    </View>
  );
};

export default Header;
