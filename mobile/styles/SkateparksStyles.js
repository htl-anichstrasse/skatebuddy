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
    borderColor: '#ccc',
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
    backgroundColor: '#fff',
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  entryName: {
    // * Legendary
    paddingTop: 1,
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryRatingContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 7,
    backgroundColor: '#00A86B',
    borderRadius: 10,
  },
  entryRatingText: {
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#fff',
  },
  entryDirectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: colors.gray1,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderRadius: 10,
    marginBottom: 5,
  },
  entryDirectionsMethodContainer: {
    padding: 5,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryDirectionsMethodContainerBorder: {
    // borderRightColor: colors.gray1,
    // borderRightWidth: 1,
    // borderStyle: 'solid',
  },
  entryDirectionsMethodText: {
    fontSize: 12,
    paddingRight: 5,
    color: colors.text,
  },
  entryDirectionsIcon: {},
  entryImage: {
    flex: 1,
    width: '100%',
    height: null,
    borderRadius: 5,
    aspectRatio: 16 / 8,
  },
});

export default SkateparksStyles;
