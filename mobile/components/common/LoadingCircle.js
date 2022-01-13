// libraries
import React from 'react';
import { ActivityIndicator } from 'react-native';

// components

// hooks

// styles
import styles from '../../styles/GlobalStyles';

const LoadingCircle = () => {
  return <ActivityIndicator style={styles.loadingCircle} />;
};

export default LoadingCircle;
