import React, { useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const requestPermission = () => {
    if (Platform.OS === 'android') {
      const granted = PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Requesting location permission',
          message:
            'Skateparks App needs access to your location to show you the closest skateparks',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } else if (Platform.OS === 'ios') {
      // ! TODO: Implement iOS permission check
      return false;
    }
  };

  requestPermission();

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      location => {
        setLocation(location);
      },
      error => {
        setError(error.code + ' ' + error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return { location, error };
};

export default useLocation;
