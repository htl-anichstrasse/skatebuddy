import './ReviewList.css';
import ShowMoreText from 'react-show-more-text';
import { useState } from 'react';

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
            <h4 className='h4-rating'>{review.reviewId}  {review.title}</h4>
            <p>{review.username}</p>
            <div id="rating" className="rating">
              <h5 className='h5-rating'>Bewertung: {review.rating}</h5>
            </div><br/>
            <ShowMoreText  lines={2} className="showMore"
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
            <h4 className='h4-rating'>{review.reviewId}  {review.title}</h4>
            <p>{review.username}</p>
            <div id="rating" className="rating">
              <h5 className='h5-rating'>Bewertung: {review.rating}</h5>
            </div><br/>
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
          <button type="button" className="top-button" id="Load-More" onClick={() => setShowMore(true)}>Mehr Reviews</button>
        </div>
      }
    </div>
  );
};

export default ReviewList;
