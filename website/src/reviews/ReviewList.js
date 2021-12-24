import './ReviewList.css';
import UserName from './UserName.js';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <div className="park-content" key={review.skateparkId}>
          <h4>{review.title}</h4>
          <UserName id={review.userId} className="username"></UserName>
          <div id="rating" className="rating">
            <h5>Bewertung: {review.rating}</h5>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
