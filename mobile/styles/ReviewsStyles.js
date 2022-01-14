import { StyleSheet } from 'react-native';

import colors from './Colors';

const ReviewsStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
  },
  review: {
    margin: 10,
  },
  reviewsContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
  },
});

export default ReviewsStyles;
