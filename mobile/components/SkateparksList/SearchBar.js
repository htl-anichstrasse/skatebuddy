// libraries
import React, { useState, useRef } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// components
import Text from '@components/common/Text';

// hooks

// styles
import colors from '@styles/Colors';
import styles from '../../styles/SkateparksStyles';

const SearchBar = ({ searchString, setSearchString }) => {
  const inputRef = useRef(null);

  return (
    <View style={styles.searchBarContainer}>
      <Pressable
        onPress={() => {
          if (inputRef.current.isFocused()) {
            inputRef.current.blur();
          } else {
            inputRef.current.focus();
          }
        }}
      >
        <FontAwesome
          name="search"
          size={16}
          color={colors.text}
          style={{ paddingHorizontal: 10 }}
        />
      </Pressable>
      <TextInput
        placeholder="Search"
        ref={inputRef}
        value={searchString}
        onChangeText={setSearchString}
        style={styles.searchBarInput}
      />
      {searchString != '' && (
        <Pressable
          onPress={() => {
            setSearchString('');
            inputRef.current.blur();
          }}
        >
          <MaterialIcons
            name="clear"
            size={16}
            color={colors.text}
            style={{ paddingHorizontal: 10 }}
          />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
