// libraries
import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import Text from '@components/common/Text';

// hooks

// styles
import styles from '@styles/SkateparkDetailsStyles';
import gStyles from '@styles/GlobalStyles';

const SkateparkDetailsHeader = ({ skatepark, navigation }) => {
  return (
    <View style={[styles.headerContainer, gStyles.shadow]}>
      <Ionicons
        name="return-up-back"
        size={30}
        color="black"
        onPress={() => {
          navigation.navigate('SkateparksList');
        }}
        style={styles.headerIcon}
      />
      <Text style={styles.headerText}>{skatepark.name}</Text>
    </View>
  );
};

export default SkateparkDetailsHeader;
