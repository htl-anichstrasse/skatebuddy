import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  loadingCircle: {
    paddingTop: 100,
  },
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashScreenText: {
    fontSize: 50,
    color: '#000',
    position: 'absolute',
    bottom: 100,
  },
  locationErrorContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 0,
    backgroundColor: '#F47174',
    borderRadius: 5,
  },
  locationErrorText: {
    fontSize: 15,
    color: '#fff',
  },
});

export default GlobalStyles;
