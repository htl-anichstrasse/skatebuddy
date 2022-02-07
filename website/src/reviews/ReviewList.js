import './ReviewList.css';
import ShowMore from 'react-show-more-button';


const button = <button className='show-more-button'>Show more</button>

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
            <ShowMore maxHeight={190} button={button}>
            <p className='bottom-text'>{review.content}</p>
            </ShowMore>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
