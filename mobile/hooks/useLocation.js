import React, { useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [locError, setLocError] = useState(null);

  /*
  {
    title: 'Requesting location permission',
    message:
      'Skateparks App needs access to your location to show you the closest skateparks',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  }
  */

  const checkPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(status => {
        if (status) {
          console.log('oida');
          setLocError(null);
          return true;
        } else {
          setLocError('Location permission denied');
          return false;
        }
      });
    } else if (Platform.OS === 'ios') {
      // TODO Implement iOS permission check
      return false;
    }
  };

  const requestPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocError(null);
          return true;
        } else {
          setLocError('Location permission denied');
          return false;
        }
      });
    } else if (Platform.OS === 'ios') {
      // TODO: Implement iOS permission request
      return false;
    }
  };

  const getLocation = () => {
    if (checkPermission() || requestPermission()) {
      console.log('getLocation');
      Geolocation.getCurrentPosition(
        location => {
          setLocation(location);
        },
        error => {
          setError(error.code + ' ' + error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    }
  };

  return { location, locError, getLocation };
};

export default useLocation;
