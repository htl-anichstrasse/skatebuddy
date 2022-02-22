import { StyleSheet } from 'react-native';
import colors from './Colors';

const pfpSize = 150;

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetailsContainer: {
    backgroundColor: colors.white,
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profilePictureContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: pfpSize,
    height: pfpSize,
    borderRadius: pfpSize / 2,
  },
  label: {
    fontSize: 20,
  },
  detail: {
    paddingLeft: 10,
    alignSelf: 'flex-end',
    fontSize: 18,
  },
  editProfileLink: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  editProfileLinkText: {},
  editIconBg: {
    backgroundColor: colors.text,
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileStyles;
