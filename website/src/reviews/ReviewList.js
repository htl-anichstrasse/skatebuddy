import './ReviewList.css';
import ShowMoreText from 'react-show-more-text';

const ReviewList = ( {reviews} ) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
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
    </div>
  );
};

export default ReviewList;
