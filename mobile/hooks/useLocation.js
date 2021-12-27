import React, { useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [locError, setLocError] = useState(null);
  const [locLoading, setLocLoading] = useState(true);

  const checkPermission = async () => {
    if (Platform.OS === 'android') {
      const status = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (status) {
        setLocError(null);
        setLocLoading(false);
        return true;
      } else {
        // setLocError('Location permission denied');
        return false;
      }
    } else if (Platform.OS === 'ios') {
      // TODO Implement iOS permission check
      return false;
    }
  };

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setLocError(null);
        setLocLoading(false);
        return true;
      } else {
        setLocError('Location permission denied');
        setLocLoading(false);
        return false;
      }
    } else if (Platform.OS === 'ios') {
      // TODO: Implement iOS permission request
      return false;
    }
  };

  const getLocation = async () => {
    setLocLoading(true);
    setLocError(null);
    if ((await checkPermission()) || (await requestPermission())) {
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

  return { location, locLoading, locError, getLocation };
};

export default useLocation;
