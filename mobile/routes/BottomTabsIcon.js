// libraries
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// components
import Text from '@components/common/Text';

// hooks

// styles

const BottomTabsIcon = ({ focused, routeName, color }) => {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Skateparks':
      iconName = 'map-marker-radius';
      break;
    case 'Map':
      iconName = 'map-search';
      break;
    case 'Profile':
      iconName = 'account-circle';
      break;
    default:
      iconName = 'alert-circle';
      break;
  }

  if (!focused) {
    iconName += '-outline';
  }

  return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
};

export default BottomTabsIcon;
