import { StyleSheet } from 'react-native';

import colors from './Colors';

const SkateparksStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  settingsContainer: {
    flexDirection: 'row',
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray1,
    margin: 10,
    borderRadius: 10,
  },
  searchBarInput: {
    padding: 0,
    color: colors.text,
    flex: 1,
  },
  sortBoxContainer: {
    backgroundColor: colors.gray1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    marginLeft: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortModalContainer: {
    flex: 1,
  },
  sortModalOpacity: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sortModalContent: {
    backgroundColor: colors.background,
    padding: 20,
  },
  sortModalCloseContainer: {
    alignSelf: 'center',
  },
  sortModalClose: { padding: 10, paddingHorizontal: 50 },
  entryContainer: {
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  entryName: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  entryRatingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  entryRatingText: {
    color: colors.white,
    paddingTop: 4,
    fontSize: 16,
  },
  entryDirectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  entryDirectionsMethodContainer: {
    padding: 5,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryDirectionsMethodText: {
    fontSize: 12,
    paddingRight: 5,
  },
  entryImage: {
    flex: 1,
    width: '100%',
    height: null,
    borderRadius: 5,
    aspectRatio: 16 / 8,
  },
});

export default SkateparksStyles;
