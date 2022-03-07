import { Link } from 'react-router-dom';
import './ParkList.css';
import Slideshow from './SlideShows';
import StarRating from 'react-star-ratings'
import SearchBar from '../staticViews/SearchBar';
import { useState } from 'react';
//import Times from './Times';


const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};

const ParkList = ({ skateparks }) => {

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(skateparks, searchQuery);

  return (
    <div className="park-list">
      <div className="add-parks">
        {sessionStorage.getItem("data") &&
        <>
        <div className='create-suggestion-park-list'>
          <Link to="/AddRecommendation" className='AddRecommendation'>
            Einen Vorschlag erstellen
          </Link>
        </div>
          <div className='create-parks-parklist'>
             {((JSON.parse(sessionStorage.getItem("data")).admin) === 1) && 
              <Link to="/Recommendations" className='park-add-link'>
                Vorschlagverwaltung/Park hinzufügen
              </Link>
            }
          </div>
        </>
        }
      </div>
      <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      {filteredPosts.map(skatepark => (
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
