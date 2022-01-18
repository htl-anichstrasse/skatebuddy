import './ParkDetails.css';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';
import Reviews from '../reviews/Reviews';
import Map from './Map';

const ParkDetails = () => {

  const { id } = useParams();
  const {
    data: park,
    isPending,
    error,
  } = useFetch('http://localhost:8000/skateparks?skateparkid=' + id);

  return (
    <div className="park-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {park && (
        <div>
          <h2 className="ParkName">{park[0].Name}</h2>
          <Map park={park}></Map>
        </div>
          )}
          <div className="Reviews">
            <Reviews id={id}></Reviews>
          </div>
        </div>
  );
};

export default ParkDetails;
