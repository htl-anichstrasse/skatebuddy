// libraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// components
// hooks
// styles
import colors from '../../styles/Colors';

const CustomText = ({ style, children }) => (
  <Text style={[styles.defaultStyle, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Poppins-Regular',
    color: colors.text,
  },
});

export default CustomText;
