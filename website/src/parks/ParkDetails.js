import './ParkDetails.css';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import Reviews from '../reviews/Reviews';
import Obstacles from './Obstacles/ObstacleList';
import Map from './map/Map'

const ParkDetails = () => {

  const { id } = useParams();
  const {
    data: park,
    isPending,
    error,
  } = useFetch('https://skate-buddy.josholaus.com/api/skateparks/' + id);

  return (
    <div className="park-details">
      {isPending && <div className='loading'>Loading...</div>}
      {error && <div>{error}</div>}
      {park && (
        <div>
          <div>
            {console.log(park)}
            <h2 className="ParkName"><font color="darkred" className="parkname-details">{park.name}</font></h2>
            <Map park={park}></Map>
          </div>
        <Obstacles Obstacles = {park.obstacles}></Obstacles>
        </div>
          )}
          <div className="Reviews">
            <Reviews id={id}></Reviews>
          </div>
        </div>
  );
};

export default ParkDetails;
