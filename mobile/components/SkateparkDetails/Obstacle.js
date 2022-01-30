// libraries
import React from 'react';
import { View, Image } from 'react-native';

// components
import Text from '@components/common/Text';

// hooks

// styles
import styles from '../../styles/ObstaclesStyles';
import { obstaclesIcons } from '../../styles/Images';

const Obstacle = ({ obstacle }) => {
  return (
    <View style={styles.obstacleContainer}>
      <Image
        style={styles.obstacleImage}
        source={obstaclesIcons[obstacle.ObstacleID]}
      />
      <View>
        <Text>{obstacle.Description}</Text>
        <Text>{obstacle.Description}</Text>
      </View>
    </View>
  );
};

export default Obstacle;
