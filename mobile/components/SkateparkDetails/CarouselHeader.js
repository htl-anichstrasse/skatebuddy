// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '@components/common/Text';

// hooks

// styles
import styles from '@styles/CarouselStyles';

const CarouselHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Bilder</Text>
  </View>
);

export default CarouselHeader;
