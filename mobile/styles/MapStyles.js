import { StyleSheet } from 'react-native';

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
});

export default styles;
