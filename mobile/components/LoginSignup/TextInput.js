// libraries
import React, { useState, useRef } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// styles
import styles from '../../styles/LoginSignupStyles';
import colors from '../../styles/Colors';
import gStyles from '../../styles/GlobalStyles';

const TextInputEmail = ({
  value,
  onChangeText,
  onBlur,
  touched,
  errors,
  name,
  icon,
  autoComplete,
  keyboardType,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <View
      style={[
        styles.inputContainer,
        isFocused
          ? styles.borderFocused
          : touched && errors
          ? styles.borderError
          : styles.border,
        gStyles.shadow,
      ]}
    >
      <Pressable
        onPress={() => {
          inputRef.current.focus();
        }}
      >
        <MaterialCommunityIcons
          name={isFocused ? icon : icon + '-outline'}
          size={24}
          color={
            isFocused
              ? colors.primary
              : touched && errors
              ? colors.error
              : colors.gray1
          }
          style={{ padding: 10 }}
        />
      </Pressable>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        name={name}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        autoCorrect={false}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputEmail;
