import { StyleSheet } from 'react-native';

import colors from './Colors';

const ReviewsStyles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.secondary,
  },
  headerTextContainer: {},
  headerText: {
    fontSize: 20,
  },
  headerTextSmall: {
    fontSize: 12,
  },
  headerFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  review: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
  },
  reviewsContainer: {
    width: '100%',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewContent: {},
});

export default ReviewsStyles;
