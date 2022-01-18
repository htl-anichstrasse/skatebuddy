// librarys
import React from 'react';
import { View } from 'react-native';

// components
import Text from '../common/Text';
import SearchBar from './SearchBar';
import SortBox from './SortBox';

// styles
import styles from '../../styles/SkateparksStyles';

const SkateparksListSettings = ({
  state,
  dispatch,
  searchString,
  setSearchString,
}) => {
  return (
    <View style={styles.settingsContainer}>
      <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <SortBox state={state} dispatch={dispatch} />
      {/* <Text style={styles.settingsText}>Sort by Duration</Text>
      <View style={styles.settingsMethods}>
        <SettingsMethod method="walking" state={state} dispatch={dispatch} />
        <SettingsMethod method="bicycling" state={state} dispatch={dispatch} />
        <SettingsMethod method="transit" state={state} dispatch={dispatch} />
        <SettingsMethod method="driving" state={state} dispatch={dispatch} />
      </View> */}
    </View>
  );
};

export default SkateparksListSettings;
