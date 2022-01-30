import React, { useState } from 'react';

import secrets from './secrets.json';

const useDirections = (location, skatepark) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortCont = new AbortController();

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

    try {
      const response = await fetch(url, { signal: abortCont.signal });
      const json = await response.json();

      if (json.status === 'OK') {
        const value = json.routes[0].legs[0].duration.value;
        const text = json.routes[0].legs[0].duration.text;

        return { value, text };
      } else {
        setError('Es konnte kein Weg gefunden werden.');
        setIsLoading(false);
        return null;
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setIsLoading(false);
        return null;
      }
    }
  };

  const getDurations = async () => {
    setError(null);
    setIsLoading(true);
    if (location) {
      const durations = await Promise.all(
        methods.map(method => fetchDuration(method)),
      );
      skatepark.durations = durations;
    } else {
      setError('Rechte für Standort nicht erteilt.');
    }
    setIsLoading(false);
  };

  const abortDurations = () => {
    abortCont.abort();
  };

  return { getDurations, abortDurations, isLoading, error };
};

export default useDirections;
