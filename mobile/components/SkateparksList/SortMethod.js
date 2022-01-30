// libraries
import React from 'react';
import { View, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '@components/common/Text';

// hooks

// styles
import colors from '@styles/Colors';
import styles from '@styles/SkateparksStyles';

const SortMethod = ({ method, state, dispatch, display }) => {
  return (
    <Pressable
      onPress={() => {
        if (state.sortBy == method && state.sortDirection === 'asc') {
          dispatch({ type: 'SORT_DESC', method: method });
        } else {
          dispatch({ type: 'SORT_ASC', method: method });
        }
      }}
      style={styles.sortMethodContainer}
    >
      <MaterialCommunityIcons
        name={
          state.sortBy == method
            ? state.sortDirection === 'asc'
              ? 'chevron-up-circle'
              : 'chevron-down-circle'
            : 'circle-outline'
        }
        size={25}
        color={state.sortBy == method ? colors.primary : colors.gray1}
      />
      <Text style={styles.sortMethodText}>{display}</Text>
    </Pressable>
  );
};

export default SortMethod;
