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
});

export default GlobalStyles;
