// libraries
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// styles
import styles from '../../styles/LoginSignupStyles';
import colors from '../../styles/Colors';

const TextInputEmail = ({ value, onChangeText, onBlur, touched, errors }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.inputContainer,
        isFocused
          ? styles.borderFocused
          : touched && errors
          ? styles.borderError
          : styles.border,
      ]}
    >
      <MaterialCommunityIcons
        name={isFocused ? 'email' : 'email-outline'}
        size={24}
        color={
          isFocused
            ? colors.primary
            : touched && errors
            ? colors.error
            : colors.gray1
        }
        style={{ marginHorizontal: 10 }}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        name="email"
        autoComplete="email"
        autoCorrect={false}
        style={styles.input}
        keyboardType="email-address"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default TextInputEmail;
