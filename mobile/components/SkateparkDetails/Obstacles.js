// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '@components/common/Text';
import ObstaclesHeader from './ObstaclesHeader';
import Obstacle from './Obstacle';

// styles
import styles from '@styles/ObstaclesStyles';
import gStyles from '@styles/GlobalStyles';

const Obstacles = ({ obstacles }) => {
  return (
    <View style={[styles.container, gStyles.shadow]}>
      {obstacles.length > 0 ? (
        <>
          <ObstaclesHeader obstacles={obstacles} />
          <View style={styles.obstaclesContainer}>
            {obstacles.map(obstacle => (
              <Obstacle key={obstacle.ObstacleID} obstacle={obstacle} />
            ))}
          </View>
        </>
      ) : (
        <Text style={styles.noObstaclesText}>Keine Hindernisse</Text>
      )}
    </View>
  );
};

export default Obstacles;
