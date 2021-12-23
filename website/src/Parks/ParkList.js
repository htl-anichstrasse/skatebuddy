import { Link } from 'react-router-dom';
import './ParkList.css';

const ParkList = ({ skateparks }) => {
  return (
    <div className="park-list">
      {skateparks.map(skatepark => (
        <div className="park-preview" key={skatepark.skateparkId}>
          <div className="list">
            <div className="park-box">
              <Link to={`/skateparks/${skatepark.skateparkId}`}>
                <div className="ParkLink">
                  <h2>{skatepark.name}</h2>
                  <div class="slideshow-container">
                    <img
                      src={
                        require('./images/' + skatepark.name + '/1.jpg').default
                      }
                      alt="Preview pic"
                      className="preview_pic"
                    />
                  </div>
                  <p>Klicken Sie die Box für mehr Details</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkList;
