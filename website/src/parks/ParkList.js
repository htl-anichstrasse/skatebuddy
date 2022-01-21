import { Link } from 'react-router-dom';
import './ParkList.css';
import Slideshow from './SlideShows';
//import Times from './Times';


const ParkList = ({ skateparks }) => {
  return (
    <div className="park-list">
      {skateparks.map(skatepark => (
        <div className="park-preview" key={skatepark.id}>
          <div className="list">
            <div className="park-box">
              <Link to={`/skateparks/${skatepark.id}`} className='ParkLink'>
                  <h2>{skatepark.name}</h2>
                {/*  <p className='average-rating'>3,42</p> */}
                </Link>
                  <div className="slideshow-container">
                    <Slideshow></Slideshow>
                  </div>
                  <Link to={`/skateparks/${skatepark.id}`} className='ParkLink'>
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
