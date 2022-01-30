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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray3,
  },
  errorText: {
    fontFamily: 'Poppins-Bold',
    backgroundColor: colors.error,
    fontSize: 25,
    padding: 10,
    borderRadius: 10,
    color: colors.white,
  },
  errorButton: {
    marginTop: 10,
    backgroundColor: colors.error,
  },
});

export default LoadingAndErrorsStyles;
