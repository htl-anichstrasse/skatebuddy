import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default GlobalStyles;
