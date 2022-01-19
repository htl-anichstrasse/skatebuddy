import useFetch from '../hooks/UseFetch';
import ParkList from './ParkList';

const Parks = () => {

  const {
    data: skateparks,
    isPending,
    error,
  } = useFetch('https://skate-buddy.josholaus.com/api/skateparks');

  return (
    <div className="ParkList">
      {isPending && <div className='loading'>
        <h1>  Loading... </h1>
        </div>}
      {error && <div>{error}</div>}
      {skateparks && <ParkList skateparks={skateparks} title="All Parks" />}
    </div>
  );
};

export default Parks;
