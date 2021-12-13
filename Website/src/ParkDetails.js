import { useParams } from "react-router-dom";
import SimpleMap from "./Map";
import useFetch from "./UseFetch";

const ParkDetails = () => {
  const { id } = useParams();
  const { data: park, isPending, error } = useFetch('http://localhost:8000/skateparks?skateparkId=' + id);
  
  return (
    <div className="park-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { park && (<>
          <h2>{ park[0].name }</h2>
          <p>Latitude: {park[0].latitude}</p>
          <p>Longitude: {park[0].longitude}</p>
          <SimpleMap></SimpleMap>
      </>
      )}
    </div>
  );
}
 
export default ParkDetails;