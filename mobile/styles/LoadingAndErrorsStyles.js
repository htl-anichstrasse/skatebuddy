import { StyleSheet } from 'react-native';

import colors from './Colors';

const LoadingAndErrorsStyles = StyleSheet.create({
  loadingCircle: {
    paddingTop: 100,
  },
  locationInfoContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 30,
  },
  locationInfoText: {
    paddingTop: 4,
    paddingRight: 10,
    fontSize: 16,
  },
  locationErrorContainer: {
    backgroundColor: colors.error,
  },
  locationLoadingContainer: {
    backgroundColor: colors.info,
  },
});

export default LoadingAndErrorsStyles;
