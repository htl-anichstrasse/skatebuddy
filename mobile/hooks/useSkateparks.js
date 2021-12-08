const useSkateparks = async (setSkateparks, setIsLoading) => {
  // TODO get skateparks from real API

  await new Promise(r => setTimeout(r, 2000));
  setIsLoading(false);

  setSkateparks([
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

  /*
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  */
};

export default useSkateparks;
