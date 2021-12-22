import { useState, useEffect } from 'react';

// useFetch will be used for the fetching of data from the database
// as soon as the server for our database is up and running I will add the needed functionality

const useFetch = (url, id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const changeData = reviews => setData(reviews);
  const changeIsLoading = isLoading => setIsLoading(isLoading);
  const changeError = error => setError(error);

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
          {
            skateparkId: 3,
            name: 'Skatepark Usi',
            latitude: 47.255859,
            longitude: 11.35585,
            address: 'Hans-Flöckinger-Promenade, 6020 Innsbruck',
            busStop: 'Innsbruck Olympiaworld',
          },
        ]);
      } else if (url == 'reviews') {
        if (id == 1) {
          setData([
            {
              reviewId: 3,
              userId: 3,
              skateparkId: 1,
              rating: 1,
              title: 'Nit so nice',
              content: 'Schlechter Spot und schlechte qualität',
            },
            {
              reviewId: 2,
              userId: 2,
              skateparkId: 1,
              rating: 4,
              title: 'Nice',
              content: 'Ganz nice',
            },
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
        } else if (id == 2) {
          setData([
            {
              reviewId: 4,
              userId: 1,
              skateparkId: 2,
              rating: 5,
              title: 'Heftig',
              content: 'Tivoli hat a geile outdoor bowl okaaayyy letss gooo',
            },
          ]);
        }
      } else {
        setError('404');
      }
      setIsLoading(false);
    }, 500);
  }, [url]);

  return { data, isLoading, error, changeData, changeIsLoading, changeError };
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
