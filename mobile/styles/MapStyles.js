import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  error: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
  },
});

export default styles;
