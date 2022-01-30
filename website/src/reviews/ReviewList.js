import './ReviewList.css';

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
            <p className='bottom-text'>{review.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
