import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateReviews.css';
import StarRating from 'react-star-ratings';


const Create = (id) => {
    const [parkid] = id.skateparkId;
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');
    const [isPending, setIsPening] = useState(false);
    let userid = "";

    if(sessionStorage.getItem("data")){
        userid = JSON.parse(sessionStorage.getItem("data")).userId
    }
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { parkid, userid, rating, title, content }

        setIsPening(true)

        fetch('https://skate-buddy.josholaus.com/api/reviews', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            window.location.reload(true);
        })
    }

    const LogIn = e => {
        e.preventDefault();
        navigate("/LogIn");

      }

    const RatingChange = (newRating, name) => {
        setRating(newRating)
        console.log(rating)
    }

    return(
        <div className="create-review">
        {!sessionStorage.getItem("data") &&<>
        <div className="login-review">
        <h1 className="review-login"><font color="darkred" className="review-login-border">Logge dich ein um eine Review zu schreiben</font></h1>
        <button className="review-login-button" onClick={LogIn}>Login</button>
        </div>
        </>
        }
        {sessionStorage.getItem("data") && 
            <div className="create">
                <h2 className="own-review-header"><font color="darkred" className="own-review">Schreibe deine eigene Review</font></h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="review-title"
                            type="text"
                            required
                            placeholder="Review Titel"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> <br/>
                        <div className="createRating">
                            <p className="create-review-user">{JSON.parse(sessionStorage.getItem("data")).name}</p><br/>
                            <div className="create-stars">
                                <StarRating
                                rating={rating}
                                changeRating={RatingChange}
                                name="select-rating" 
                                starRatedColor="darkred"
                                starHoverColor="red"
                                starEmptyColor="white"
                            />
                            </div>
                            <textarea
                                className="review-desc"
                                placeholder="Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                cols={80}
                                rows={5}
                                style={{
                                    resize: 'none',
                                }
                                }
                            /><br/>
                        </div>
                        {!isPending && <button className="send-review">Review senden</button>}
                        {isPending && <button className="send-review" disabled>Lädt...</button>}
                    </form>
        </div>
        }
        </div>
    )
}

export default Create;