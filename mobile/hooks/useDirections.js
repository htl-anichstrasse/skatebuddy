import React from 'react';
import { View, Text } from 'react-native';
import secrets from './secrets.json';
import useLocation from './useLocation';

const useDirections = () => {
  let { location } = useLocation();

  if (location) {
    console.log(location);
  }

  let url = 'https://maps.googleapis.com/maps/api/directions/json?origin=';
  url += currentPosition;
  url += '&destination=';
  url += destination;
  url += '&key=';
  url += secrets.apiKey;
  return;
};

export default useDirections;
