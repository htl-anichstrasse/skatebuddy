import './ReviewList.css';
import UserName from './UserName.js';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      {reviews.map(review => (
        <div className="park-content" key={review.skateparkId}>
          <h4>{review.title}</h4>
          <UserName id={review.userId} className="username"></UserName>
          <div id="rating_bitch" className="rating">
            <h5>Rating: {review.rating}</h5>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
