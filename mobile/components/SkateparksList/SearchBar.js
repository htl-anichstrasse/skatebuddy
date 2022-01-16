// libraries
import React from 'react';
import { View, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// components
import Text from '@components/common/Text';

// hooks

// styles
import colors from '@styles/Colors';
import styles from '../../styles/SkateparksStyles';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <FontAwesome
        name="search"
        size={16}
        color={colors.text}
        style={{ paddingHorizontal: 10 }}
      />
      <TextInput
        placeholder="Search"
        onChangeText={text => console.log(text)}
        style={styles.searchBarInput}
      />
    </View>
  );
};

export default SearchBar;
