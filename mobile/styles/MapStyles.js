import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  loadingCircle: {
    paddingTop: 100,
  },
});

export default styles;
