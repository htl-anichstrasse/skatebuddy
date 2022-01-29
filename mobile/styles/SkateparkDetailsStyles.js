import { StyleSheet } from 'react-native';
import colors from './Colors';

const SkateparkDetailsStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  headerText: {
    paddingTop: 15,
    paddingBottom: 8,
    fontSize: 25,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  modalContainer: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 20,
    margin: 20,
    borderColor: colors.gray2,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 20,
  },
  modalTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  modalTitleText: {
    fontSize: 20,
  },
  modalCancelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalCancelText: {
    paddingTop: 2,
    paddingHorizontal: 5,
    color: colors.secondary,
    fontSize: 15,
  },
  ratingValue: {
    textAlign: 'center',
  },
  ratingSlider: {
    marginHorizontal: 5,
  },
  inputLabel: {
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: 20,
  },
  errorText: {
    marginHorizontal: 20,
    color: colors.error,
  },
  button: {
    backgroundColor: colors.secondary,
  },
  additionalInfosContainer: {
    backgroundColor: colors.white,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  additionalInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  additionalInfoLabel: {},
  additionalInfo: {},
});

export default SkateparkDetailsStyles;
