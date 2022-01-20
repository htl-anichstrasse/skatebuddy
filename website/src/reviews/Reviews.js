import useFetch from '../hooks/UseFetch';
import ReviewList from './ReviewList';
import Create from './CreateReviews';

const Reviews = (id) => {

  const {
    data: reviews,
    isPending,
    error,
  } = useFetch('https://skate-buddy.josholaus.com/api/reviews/' + id.id);

  return (
    <div className="Reviews">
      <Create skateparkId={id.id}></Create>
      {isPending && <>
      <h1>Loading...</h1>
      </>}
      {error && <div>{error}</div>}
      {reviews && <ReviewList reviews={reviews}></ReviewList>}
    </div>
  );
};

export default Reviews;
