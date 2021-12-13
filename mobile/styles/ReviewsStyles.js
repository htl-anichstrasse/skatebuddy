import { StyleSheet } from 'react-native';

const ReviewsStyles = StyleSheet.create({
  reviews: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '300%',
  },
  reviewsContainer: {
    width: 300,
    height: 300,
    flex: 1,
  },
  header: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    maxHeight: 50,
    width: 300,
    flexDirection: 'row',
    flex: 1,
  },
  headerTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  reviewsCountContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 50,
    backgroundColor: '#eee',
  },
  reviewsCount: {
    fontSize: 20,
  },
  review: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});

export default ReviewsStyles;
