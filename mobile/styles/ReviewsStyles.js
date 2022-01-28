import { StyleSheet } from 'react-native';

import colors from './Colors';

const ReviewsStyles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  headerTextContainer: {
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 20,
  },
  headerTextSmall: {
    fontSize: 12,
  },
  headerFirstRow: {
    flexDirection: 'row',
  },
  starsContainer: {
    paddingTop: 3,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  review: {
    margin: 10,
  },
  reviewsContainer: {
    width: '100%',
  },
});

export default ReviewsStyles;
