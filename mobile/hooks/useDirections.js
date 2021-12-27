import React, { useState } from 'react';

import secrets from './secrets.json';
import walking from './directionsRequests/walking.json';
import bicycling from './directionsRequests/bicycling.json';
import transit from './directionsRequests/transit.json';
import driving from './directionsRequests/driving.json';

const useDirections = (location, skatepark) => {
  const [durations, setDurations] = useState([]);

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

  const getDurations = async () => {
    let res = await fetch(buildUrl('walking'));
    let data = await res.json();
    const walkingDuration = data.routes[0].legs[0].duration.text;

    res = await fetch(buildUrl('bicycling'));
    data = await res.json();
    const bicyclingDuration = data.routes[0].legs[0].duration.text;

    res = await fetch(buildUrl('transit'));
    data = await res.json();
    const transitDuration = data.routes[0].legs[0].duration.text;

    res = await fetch(buildUrl('driving'));
    data = await res.json();
    const drivingDuration = data.routes[0].legs[0].duration.text;

    setDurations([
      walkingDuration,
      bicyclingDuration,
      transitDuration,
      drivingDuration,
    ]);
  };

  return { durations, getDurations };
};

export default useDirections;
