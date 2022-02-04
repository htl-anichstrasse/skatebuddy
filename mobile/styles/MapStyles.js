import { StyleSheet } from 'react-native';

import colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  calloutTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  calloutDescription: {
    textAlign: 'center',
    fontSize: 12,
  },
  circleButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
