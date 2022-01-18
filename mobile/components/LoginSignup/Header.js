// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '../common/Text';

// styles
import styles from '../../styles/LoginSignupStyles';

const Header = ({ text, color }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
      <Text style={styles.headerTextColor}>{color}</Text>
    </View>
  );
};

export default Header;
