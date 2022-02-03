// libraries
import React from 'react';
import { View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// components
import Text from '@components/common/Text';

// hooks

// styles
import styles from '../../styles/ObstaclesStyles';
import colors from '@styles/Colors';
import { obstaclesIcons } from '../../styles/Images';

const Obstacle = ({ obstacle }) => {
  const skulls = obstacle.difficulty;
  const graySkulls = 10 - skulls;

  return (
    <View style={styles.obstacleContainer}>
      <Image
        style={styles.obstacleImage}
        source={obstaclesIcons[obstacle.ObstacleID]}
      />
      <View>
        <Text style={styles.obstacleDescription}>{obstacle.Description}</Text>
        <View style={styles.skullsContainer}>
          {[...Array(skulls)].map((_, i) => (
            <Ionicons key={i} name="skull" size={20} color={colors.secondary} />
          ))}
          {graySkulls > 0 &&
            [...Array(graySkulls)].map((_, i) => (
              <Ionicons
                key={i}
                name="skull-outline"
                size={20}
                color={colors.gray2}
              />
            ))}
        </View>
      </View>
    </View>
  );
};

export default Obstacle;
