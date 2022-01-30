import { Link } from 'react-router-dom';
import './ParkList.css';
import Slideshow from './SlideShows';
//import Times from './Times';

const Round =(skatepParkRating) =>{
  const rating = Math.round((skatepParkRating + Number.EPSILON) *10) /10;

  return rating
}

const ParkList = ({ skateparks }) => {

  return (
    <div className="park-list">
      {skateparks.map(skatepark => (
        <div className="park-preview" key={skatepark.skateparkId}>
          <div className="list">
            <div className="park-box">
              <Link to={`/skateparks/${skatepark.skateparkId}`} className='ParkLink'>
                  <h2>{skatepark.name}</h2>
                  {skatepark.rating &&
                  <div className='average-rating-width'>
                  <p className='average-rating'>{Round(skatepark.rating)} ⭐</p>
                  </div>
                    }
                  {!skatepark.rating && 
                  <div className='average-rating-width'>
                  <p className='average-rating'>No Ratings yet</p>
                  </div>
                  }
                </Link>
                  <div className="slideshow-container">
                    <Slideshow></Slideshow>
                  </div>
                  <Link to={`/skateparks/${skatepark.skateparkId}`} className='ParkLink'>
                  <p>Klicken Sie die Box für mehr Details</p>
                  </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkList;
