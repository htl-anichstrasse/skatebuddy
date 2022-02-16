import { StyleSheet } from 'react-native';
import colors from '@styles/Colors';

const CarouselStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  headerContainer: {
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
  },
  headerText: {
    fontSize: 20,
  },
  carouselItemContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  carouselItemText: {
    fontSize: 20,
  },
  autoplayButton: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10,
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    padding: 5,
  },
  nextButton: {
    backgroundColor: colors.white,
    borderRadius: 25,
    position: 'absolute',
    flexDirection: 'row',
    top: 125,
    right: 20,
  },
  prevButton: {
    backgroundColor: colors.white,
    borderRadius: 25,
    position: 'absolute',
    flexDirection: 'row',
    top: 125,
    left: 20,
  },
  paginationContainer: {
    paddingVertical: 0,
    height: 30,
  },
  dotContainer: {},
});

export default CarouselStyles;
