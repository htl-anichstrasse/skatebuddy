import { StyleSheet } from 'react-native';

const LoadingAndErrorsStyles = StyleSheet.create({
  loadingCircle: {
    paddingTop: 100,
  },
  locationErrorContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F47174',
    borderRadius: 5,
  },
  locationErrorText: {
    fontSize: 15,
    color: '#fff',
  },
  locationLoading: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F5DF4D',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  locationLoadingText: {
    paddingRight: 10,
  },
});

export default LoadingAndErrorsStyles;
