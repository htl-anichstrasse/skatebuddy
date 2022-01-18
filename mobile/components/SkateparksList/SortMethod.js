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

const SortMethod = ({ method, state, dispatch }) => {
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
        name={state.sortBy == method ? 'radiobox-marked' : 'radiobox-blank'}
        size={20}
        color={state.sortBy == method ? colors.primary : colors.gray1}
      />
      <Text style={styles.sortMethodText}>
        {method.charAt(0).toUpperCase() + method.slice(1)}
      </Text>
    </Pressable>
  );
};

export default SortMethod;
