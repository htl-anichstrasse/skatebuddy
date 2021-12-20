import { useState, useEffect } from "react";
import ReviewList from "./ReviewList";

const Reviews = (id) =>{

    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/reviews?skateparkId='+id.id)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setReviews(data);
            });
    }, [id]);

    return(
        <div className="Reviews">
            {reviews && <ReviewList reviews={reviews}></ReviewList>}
        </div>
    );

}

export default Reviews;