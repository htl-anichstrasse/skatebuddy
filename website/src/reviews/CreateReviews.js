import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateReviews.css'


const Create = (id) => {
    const [parkid] = id.skateparkId;
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');
    let userid = "";

    if(sessionStorage.getItem("data")){
        userid = JSON.parse(sessionStorage.getItem("data")).userId
    }
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { parkid, userid, rating, title, content }

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

    return(
        <>
        {!sessionStorage.getItem("data") &&<>
        <div className="login-review">
        <h1 className="review-login">Login to be able to write a review</h1>
        <button className="review-login-button" onClick={LogIn}>Login</button>
        </div>
        </>
        }
        {sessionStorage.getItem("data") && 
            <div className="create">
                <h2>Schreibe deine eigene Review:</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            required
                            placeholder="Review Titel"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> <br/>
                        User: {JSON.parse(sessionStorage.getItem("data")).name}<br/>
                        <label>Bewertung:</label>
                        <input
                            type="number"
                            required
                            min="0"
                            max="5"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        /><br/>
                        <textarea
                            required
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            cols={50}
                            rows={5}
                            style={{
                                resize: 'none'
                            }
                            }
                        /><br/>
                        <button>Review senden</button>
                    </form>
        </div>
        }
        </>
    )
}

export default Create;