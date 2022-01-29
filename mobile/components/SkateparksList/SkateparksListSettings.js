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
    </View>
  );
};

export default SkateparksListSettings;
