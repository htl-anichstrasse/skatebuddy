import React, { useState } from 'react';

import secrets from './secrets.json';
import walking from './directionsRequests/walking.json';
import bicycling from './directionsRequests/bicycling.json';
import transit from './directionsRequests/transit.json';
import driving from './directionsRequests/driving.json';

const useDirections = (location, skatepark) => {
  const [durations, setDurations] = useState([]);
  const methods = ['walking', 'bicycling', 'transit', 'driving'];

  const buildUrl = method => {
    let url = 'https://maps.googleapis.com/maps/api/directions/json?origin=';
    url += location.coords.latitude.toString();
    url += ',';
    url += location.coords.longitude.toString();
    url += '&destination=';
    url += skatepark.latitude.toString() + ',' + skatepark.longitude.toString();
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
    // if (location != null) {
    //   const durations = await Promise.all(
    //     methods.map(method => fetchDuration(method)),
    //   );
    //   setDurations(durations);
    // }
    // * Using presaved json files to avoid hitting the API
    const wDur = walking.routes[0].legs[0].duration;
    const bDur = bicycling.routes[0].legs[0].duration;
    const tDur = transit.routes[0].legs[0].duration;
    const dDur = driving.routes[0].legs[0].duration;
    setDurations([wDur, bDur, tDur, dDur]);
  };

  return { durations, getDurations };
};

export default useDirections;
