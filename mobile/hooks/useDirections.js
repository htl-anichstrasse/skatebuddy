import React, { useState } from 'react';

import secrets from './secrets.json';

const useDirections = (location, skatepark) => {
  const methods = ['walking', 'bicycling', 'transit', 'driving'];

  const buildUrl = method => {
    let url = 'https://maps.googleapis.com/maps/api/directions/json?origin=';
    url += location.coords.latitude.toString();
    url += ',';
    url += location.coords.longitude.toString();
    url += '&destination=';
    // ! location.latitude
    // ! location.longitude
    url += skatepark.lat.toString() + ',' + skatepark.lon.toString();
    url += '&mode=';
    url += method;
    url += '&key=';
    url += secrets.apiKey;
    return url;
  };

  const fetchDuration = async method => {
    const url = buildUrl(method);
    const response = await fetch(url);
    const json = await response.json();

    const value = json.routes[0].legs[0].duration.value;
    const text = json.routes[0].legs[0].duration.text;

    return { value, text };
  };

  const getDurations = async () => {
    // * Using presaved durations in useFetch.js to avoid API call
    if (location != null) {
      const durations = await Promise.all(
        methods.map(method => fetchDuration(method)),
      );
      skatepark.durations = durations;
    }
  };

  return { getDurations };
};

export default useDirections;
