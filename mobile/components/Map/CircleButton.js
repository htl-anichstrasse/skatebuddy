// libraries
import React from 'react';
import { Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '@components/common/Text';

// hooks

// styles
import styles from '@styles/MapStyles';
import gStyles from '@styles/GlobalStyles';
import colors from '@styles/Colors';

const CircleButton = ({ onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.circleButtonContainer, gStyles.shadow]}
  >
    <MaterialCommunityIcons
      name="home-map-marker"
      color={colors.white}
      size={45}
    />
  </Pressable>
);

export default CircleButton;
