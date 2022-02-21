import './ReviewList.css';
import ShowMoreText from 'react-show-more-text';
import { useState } from 'react';
import StarRating from 'react-star-ratings';

const ReviewList = ( {reviews} ) => {

  const [showMore, setShowMore] = useState(false);
  let length = true;

  if(reviews.length<10){
    length = false;
  }

  return (
    <div className="review-list">
      {reviews.slice(0,10).map(review => (
          <div className="review-content" key={review.skateparkId}>
          <div className="reviews-in-box">
            <h3 className='h3-rating'>{review.title}</h3>
            <p className='review-username'>{review.username}</p>
            <div id="rating" className="rating">
              <StarRating
              rating={review.rating}
              starRatedColor="darkred"
              starSpacing="1px"
              starDimension="22px"
              />
            </div>
            <ShowMoreText  lines={1} className="showMore"
                more="Mehr anzeigen"
                less="Weniger anzeigen">
            <p className='bottom-text'>{review.content}</p>
            </ShowMoreText>
          </div>
        </div>
      ))}
      {showMore && reviews.slice(10).map(review => (
         <div className="review-content" key={review.skateparkId}>
         <div className="reviews-in-box">
           <h3 className='h3-rating'>{review.title}</h3>
           <p className='review-username'>{review.username}</p>
           <div id="rating" className="rating">
             <StarRating
             rating={review.rating}
             starRatedColor="darkred"
             starSpacing="1px"
             starDimension="30px"
             />
           </div>
           <ShowMoreText  lines={2} className="showMore"
               more="Mehr anzeigen"
               less="Weniger anzeigen">
           <p className='bottom-text'>{review.content}</p>
           </ShowMoreText>
         </div>
       </div>
      ))}

      {!showMore && length &&
        <div className="middleButton">
          <button type="button" className="top-button-reviews" onClick={() => setShowMore(true)}>Mehr Reviews</button>
        </div>
      }
    </div>
  );
};

export default ReviewList;
