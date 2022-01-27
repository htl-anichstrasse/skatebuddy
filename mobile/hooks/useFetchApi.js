import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const changeData = reviews => setData(reviews);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
    .then(res => {
      if (!res.ok) {
        throw Error('Response error');
      }
      return res.json();
    })
    .then(data => {
      setError(null);
      setData(data);
      setIsLoading(false);
    })
    .catch(err => {
      if (err.name !== 'AbortError') {
        setError(err.message);
        setIsLoading(false);
      }
    })

    return () => abortCont.abort();
  }, [url])

  return { data, isLoading, error, changeData };
}

export default useFetch;