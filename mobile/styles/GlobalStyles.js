import { StyleSheet } from 'react-native';
import colors from './Colors';

const GlobalStyles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    height: 400,
    width: 400,
  },
  splashScreenTextContainer: {
    flexDirection: 'row',
  },
  splashScreenText: {
    fontSize: 50,
  },
  splashScreenTextColor: {
    fontSize: 50,
    color: colors.primary,
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
