import { StyleSheet } from 'react-native';
import colors from '@styles/Colors';

const ObstaclesStyles = StyleSheet.create({
  container: {
    // borderColor: colors.secondary,
    // borderWidth: 1,
    backgroundColor: colors.white,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  obstaclesHeaderText: {
    fontSize: 20,
  },
  obstacleContainer: {
    flexDirection: 'row',
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
    paddingVertical: 5,
  },
  obstacleImage: {
    width: 50,
    height: 50,
  },
  skullsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  obstacleDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ObstaclesStyles;
