import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../account/Auth/auth-service";
import './CreateReviews.css'


const Create = (id) => {
    const [parkid] = id.skateparkId;
    const [title, setTitle] = useState('');
    const token = JSON.parse(localStorage.getItem('user')).token;
    const userid = 1;
    const user = authService.decodeToken(token)
    console.log(user)
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        const blog = { parkid, userid, rating, title, content }

        fetch('https://skate-buddy.josholaus.com/api/reviews', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
        })
    }

    const LogIn = () => {
        navigate("/LogIn");
        window.location.reload(false);
      }

    return(
        <>
        {!token &&<>
        <div className="login-review">
        <h1 className="review-login">Login to be able to write a review</h1>
        <button className="review-login-button" onClick={LogIn}>Login</button>
        </div>
        </>
        }
        {token && 
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
                User: 1<br/>
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