// libraries
import React from 'react';
import { View } from 'react-native';

// components
import Text from '@components/common/Text';
import Button from '@components/common/Button';

// hooks

// styles
import leStyles from '@styles/LoadingAndErrorsStyles';

const Error = ({ error, refresh }) => {
  return (
    <View style={leStyles.errorContainer}>
      <Text style={leStyles.errorText}>{error}</Text>
      <Button
        title="Retry"
        icon="refresh"
        iconType="ii"
        style={leStyles.errorButton}
        onPress={() => {
          refresh();
        }}
      />
    </View>
  );
};

export default Error;
