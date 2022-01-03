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
            address: 'Innsbruck Hallenbad O-Dorf, 6063 Innsbruck',
            busStop: 'Innsbruck Hallenbad O-Dorf',
            durations: [
              { text: '1 hour 2 mins', value: 3707 },
              { text: '17 mins', value: 1023 },
              { text: '27 mins', value: 1644 },
              { text: '14 mins', value: 834 },
            ],
          },
          {
            skateparkId: 2,
            name: 'Skatepark Tivoli',
            latitude: 47.2587839,
            longitude: 11.4075082,
            address: 'Olympiastraße 33, 6020 Innsbruck',
            busStop: 'Innsbruck Olympiaworld',
            durations: [
              { text: '27 mins', value: 1598 },
              { text: '8 mins', value: 464 },
              { text: '13 mins', value: 773 },
              { text: '10 mins', value: 607 },
            ],
          },
          {
            skateparkId: 3,
            name: 'Skatepark USI',
            latitude: 47.255859,
            longitude: 11.35585,
            address: 'Hans-Flöckinger-Promenade, 6020 Innsbruck',
            busStop: 'Innsbruck Uni-Sportstätten',
            durations: [
              { text: '38 mins', value: 2290 },
              { text: '12 mins', value: 713 },
              { text: '28 mins', value: 1673 },
              { text: '11 mins', value: 648 },
            ],
          },
          {
            skateparkId: 4,
            name: 'Skatepark Lohbach',
            latitude: 47.267529,
            longitude: 11.343937,
            address: 'Viktor-Franz-Hess-Straße, 6020 Innsbruck',
            busStop: 'Innsbruck Luis-Zuegg-Straße',
            durations: [
              { text: '49 mins', value: 2942 },
              { text: '14 mins', value: 838 },
              { text: '21 mins', value: 1238 },
              { text: '11 mins', value: 656 },
            ],
          },
        ]);
      }
      if (url == 'reviews') {
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
      }
      if (url == 'users') {
        if (id == 1) {
          setData({
            userId: 1,
            username: 'johndoe',
            email: 'johndoe@email.com',
          });
        }
        // if (id == undefined) {
        // }
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
