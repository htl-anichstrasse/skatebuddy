// libraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// components
// hooks
// styles
import colors from '../../styles/Colors';

const CustomText = props => {
  return (
    <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'Poppins-Regular',
    color: colors.text,
  },
});

export default CustomText;
