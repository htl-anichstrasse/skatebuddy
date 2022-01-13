import { StyleSheet } from 'react-native';

import colors from './Colors';

const LoadingAndErrorsStyles = StyleSheet.create({
  loadingCircle: {
    paddingTop: 100,
  },
  locationErrorContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: colors.error,
    borderRadius: 5,
  },
  locationErrorText: {
    fontSize: 15,
    color: colors.white,
  },
  locationLoading: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.info,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  locationLoadingText: {
    paddingRight: 10,
  },
});

export default LoadingAndErrorsStyles;
