import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../../styles/SkateparksStyles';

const SettingsMethod = ({ method, state, dispatch }) => {
  return (
    <View style={styles.settingsMethod}>
      <Pressable
        onPress={() => {
          if (state.sortBy == method && state.sortDirection === 'asc') {
            dispatch({ type: 'SORT_DESC', method: method });
          } else {
            dispatch({ type: 'SORT_ASC', method: method });
          }
        }}
      >
        <View style={styles.settingsMethodTextContainer}>
          <Text style={styles.settingsMethodText}>
            {method.charAt(0).toUpperCase() + method.slice(1)}
          </Text>
          <FontAwesome5
            name={
              state.sortBy == method
                ? state.sortDirection === 'asc'
                  ? 'sort-up'
                  : 'sort-down'
                : 'sort'
            }
            size={20}
            color={state.sortBy == method ? '#00A86B' : '#a6a6a6'}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default SettingsMethod;
