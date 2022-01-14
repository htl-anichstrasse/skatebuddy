import { StyleSheet } from 'react-native';

import colors from './Colors';

const SkateparksStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  settingsContainer: {
    backgroundColor: colors.background,
  },
  settingsText: {
    textAlign: 'center',
  },
  settingsMethods: {
    flexDirection: 'row',
  },
  settingsMethod: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colors.gray1,
  },
  settingsMethodText: {
    textAlign: 'center',
  },
  settingsMethodTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
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
