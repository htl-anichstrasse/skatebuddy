import { StyleSheet } from 'react-native';
import colors from './Colors';

const GlobalStyles = StyleSheet.create({
  loadingCircleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingCircle: {
    paddingTop: 100,
  },
  splashScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    height: 400,
    width: 400,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 25,
    backgroundColor: colors.primary,
    padding: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonText: {
    color: colors.white,
    marginRight: 5,
    fontSize: 18,
    fontWeight: 'bold',
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
