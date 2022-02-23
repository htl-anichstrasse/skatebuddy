import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const changeData = reviews => setData(reviews);

  const [refresher, setRefresher] = useState(false);

  const refreshData = () => {
    setRefresher(prevRefresher => !prevRefresher);
  };

  useEffect(() => {
    setData(null);
    setIsLoading(true);
    setError(null);
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        if (!res.ok) {
          // console.log(JSON.stringify(res));

          throw Error(`HTTP Error: + ${res.status}`);
        }
        return res.json();
      })
      .then(json => {
        setError(null);
        setData(json);
        setIsLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => abortCont.abort();
  }, [url, refresher]);

  return { data, isLoading, error, changeData, refreshData };
};

export default useFetch;
