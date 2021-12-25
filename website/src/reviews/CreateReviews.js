import { useState } from "react";

const Create = (id) => {
    const [skateparkId] = id.skateparkId;
    const [title, setTitle] = useState('');
    const [userId] = "1";
    const [rating, setRating] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        const blog = { userId, skateparkId, rating, title, content }

        fetch('http://localhost:8000/reviews', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('gute');
        })
    }

    return(
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
                    placeholder="Review"
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
    )
}

export default Create;