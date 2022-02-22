// libraries
import React, { useState, useRef, useEffect } from 'react';
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
  color = colors.primary,
  multiline,
  numberOfLines,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [currentColor, setCurrentColor] = useState(colors.gray1);

  const handleFocus = () => {
    setIsFocused(true);
    setCurrentColor(color);
  };

  const handleBlur = e => {
    onBlur(e);
    setIsFocused(false);
    setCurrentColor(touched && errors ? colors.error : colors.gray1);
  };

  if (color !== colors.primary) {
    styles.borderFocused = {
      ...styles.borderFocused,
      borderBottomColor: color,
    };
  } else {
    styles.borderFocused = {
      ...styles.borderFocused,
      borderBottomColor: colors.primary,
    };
  }

  const focusedStyle = [
    styles.inputContainer,
    styles.borderFocused,
    gStyles.shadow,
  ];

  const unfocusedStyle = useRef([
    styles.inputContainer,
    styles.border,
    gStyles.shadow,
  ]);

  useEffect(() => {
    unfocusedStyle.current = [
      styles.inputContainer,
      touched && errors ? styles.borderError : styles.border,
      gStyles.shadow,
    ];
  }, [touched, errors]);

  return (
    <View style={isFocused ? focusedStyle : unfocusedStyle.current}>
      <Pressable
        onPress={() => {
          inputRef.current.focus();
        }}
      >
        <MaterialCommunityIcons
          name={isFocused ? icon : `${icon}-outline`}
          size={24}
          color={currentColor}
          style={styles.inputIcon}
        />
      </Pressable>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        autoCorrect={false}
        style={styles.input}
        secureTextEntry={secureTextEntry && !showPassword}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {(name === 'password' || name === 'confirmPassword') && (
        <Pressable
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        >
          <MaterialCommunityIcons
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color={currentColor}
            style={styles.inputIcon}
          />
        </Pressable>
      )}
    </View>
  );
};

export default TextInputEmail;
