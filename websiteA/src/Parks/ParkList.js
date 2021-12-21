import { Link } from 'react-router-dom';
import './ParkList.css';

const ParkList = ({ skateparks }) => {
  return (
    <div className="park-list">
      {skateparks.map(skatepark => (
        <div className="park-preview" key={skatepark.skateparkId}>
          <div className="park-box">
            <Link to={`/skateparks/${skatepark.skateparkId}`}>
              <div className="ParkLink">
                <h2>{skatepark.name}</h2>
                <img
                  src={
                    require('./images/main_images/' + skatepark.name + '.jpg')
                      .default
                  }
                  alt="Preview pic"
                  className="preview_pic"
                />
                <p>Klicken Sie die Box für mehr Details</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkList;
