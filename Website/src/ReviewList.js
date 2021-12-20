import './ReviewList.css';
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>


const ReviewList = ({reviews}) =>{
    
    return (

        <div className="review-list">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          {reviews.map(review => (
            <div className="park-content" key={review.skateparkId} >
                <h4>{review.title}</h4>
                <h5>{review.userId}</h5>
                <div id="rating_bitch" className="rating">
                <span class="fa fa-star checked"></span>    
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </div>
                <p>{ review.content }</p>
            </div>
        ))}
    </div>
    )
}

export default ReviewList;
