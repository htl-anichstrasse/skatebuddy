import { Link } from 'react-router-dom';
import './ParkList.css';
import Slideshow from './SlideShows';
import StarRating from 'react-star-ratings'
//import Times from './Times';

const ParkList = ({ skateparks }) => {

  return (
    <div className="park-list">
      <div className="add-parks">
        <Link to="/AddPark" className='park-add-link'>
          Add a Park
        </Link>
      </div>
      {skateparks.map(skatepark => (
        <div className="park-preview" key={skatepark.skateparkId}>
          <div className="list">
            <div className="park-box">
              <Link to={`/skateparks/${skatepark.skateparkId}`} className='ParkLink'>
                  <h2>{skatepark.name}</h2>
                  {skatepark.rating &&
                  <div className='average-rating-width'>
                  <StarRating
                    rating={skatepark.rating}
                    starRatedColor="darkred"
                    starSpacing="4px"
                    starDimension="30px"
                  />
                  </div>
                    }
                  {!skatepark.rating && 
                  <div className='average-rating-width'>
                  <p className='average-rating'>No Ratings yet</p>
                  </div>
                  }
                </Link>
                  <div className="slideshow-container">
                    <Slideshow parkpics ={skatepark.pictureIds}></Slideshow>
                  </div>
                  <Link to={`/skateparks/${skatepark.skateparkId}`} className='ParkLink'>
                  <p className='clickBox'>Klicken Sie die Box für mehr Details</p>
                  </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkList;
