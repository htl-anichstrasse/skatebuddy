import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (url == 'skateparks') {
        setData([
          {
            skateparkId: 1,
            name: 'Sane Skate Plaza Rum',
            latitude: 47.268467,
            longitude: 11.447938,
            address: '',
            busStop: 'Innsbruck Hallenbad O-Dorf',
          },
          {
            skateparkId: 2,
            name: 'Skatepark Tivoli',
            latitude: 47.2587839,
            longitude: 11.4075082,
            address: 'Olympiastraße 33, 6020 Innsbruck',
            busStop: 'Innsbruck Olympiaworld',
          },
        ]);
      } else if (url == 'reviews') {
        setData([
          {
            reviewId: 1,
            userId: 1,
            skateparkId: 1,
            rating: 5,
            title: 'Sueeee',
            content:
              'Rum hat a geile ramp seitdem sie nen 2020 umbaut ham, less go weiter so jungs #skatekeks',
          },
        ]);
      } else {
        setError('404');
      }
      setIsLoading(false);
    }, 5000);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

/*
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('Error fetching data');
        }
        return res.json();
      })
      .then(json => {
        setData(json);
        setError(null);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);*/
