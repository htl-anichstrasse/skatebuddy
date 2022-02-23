// libraries
import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '@components/common/Text';

// hooks

// styles
import colors from '@styles/Colors';
import styles from '@styles/SkateparksStyles';

const SortMethod = ({ method, state, dispatch, display }) => {
  const [icon, setIcon] = useState('circle-outline');

  useEffect(() => {
    setIcon('circle-outline');
    if (state.sortBy === method) {
      if (state.sortDirection === 'asc') {
        setIcon('chevron-up-circle');
      } else {
        setIcon('chevron-down-circle');
      }
    }
  }, [method, state.sortBy, state.sortDirection]);

  return (
    <Pressable
      onPress={() => {
        if (state.sortBy === method && state.sortDirection === 'asc') {
          dispatch({ type: 'SORT_DESC', method });
        } else {
          dispatch({ type: 'SORT_ASC', method });
        }
      }}
      style={styles.sortMethodContainer}
    >
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={state.sortBy === method ? colors.primary : colors.gray1}
      />
      <Text style={styles.sortMethodText}>{display}</Text>
    </Pressable>
  );
};

export default SortMethod;
