// libraries
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// components

// hooks

// styles
import styles from '../../styles/GlobalStyles';
import colors from '../../styles/Colors';

const LoadingCircle = ({ color = colors.primary }) => {
  return (
    <View style={styles.loadingCircleContainer}>
      <ActivityIndicator
        style={styles.loadingCircle}
        size={'large'}
        color={color}
      />
    </View>
  );
};

export default LoadingCircle;
