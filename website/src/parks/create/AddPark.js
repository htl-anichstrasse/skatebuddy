import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPark.css";

const list = [];

const AddPark = () =>{

    const [name, setName] = useState();
    const [suggestionId, setSuggestionId] = useState();
    const [address, setAddress] = useState();
    const [busstop, setBusstop] = useState();
    const [isPending, setIsPending] = useState(false);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [ObstacleID, setObstacleID] = useState(1);
    const [difficulty, setDifficulty] = useState(1);
    const [obstacles, setObstacles] = useState(list);
    const [listId, setListId] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if(sessionStorage.getItem("recommendation")){
            let recommend = JSON.parse(sessionStorage.getItem("recommendation"))
            sessionStorage.removeItem("recommendation")
            setSuggestionId(recommend.skateparkId)
            setName(recommend.name)
            setAddress(recommend.address)
            setBusstop(recommend.busstop)
            setLatitude(recommend.latitude)
            setLongitude(recommend.longitude)
            setDifficulty(recommend.difficulty)
            setObstacleID(recommend.ObstacleID)
            setObstacles(recommend.obstacles)
        }
      }, []);

    const handleSubmit = async(e) => {
        e.preventDefault()
        const park = { name, address, busstop, latitude, longitude, obstacles }

        setIsPending(true)

        fetch('https://skate-buddy.josholaus.com/api/skateparks', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(park)
        }).then(() => {
            fetch(
                "https://skate-buddy.josholaus.com/api/suggestions/"+suggestionId,{
                  method:'DELETE'
                })
        }).then(() => {
            navigate("/parks")
        })
    }

    const addObstacle = (e) =>{
        const newList = obstacles.concat({ listId, ObstacleID, difficulty });
        setListId(listId+1)
        setObstacles(newList);
    }


    const removeObstacleFromList = (e) =>{
        const idOb = e.target.getAttribute("name")
        // eslint-disable-next-line eqeqeq
        setObstacles(obstacles.filter(item => item.listId != idOb))
    }

    return(
        <div className="register-form">
        <div className="register-in-box">
        <h1>Fügen Sie einen Park hinzu</h1>
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label>Parkname</label><br/>
                <input
                    className='inputPark'
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br/>
            </div>
            <div className="field">
                <label>Addresse</label><br/>
                <input
                    className='inputPark'
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                /><br/>
            </div>
            <div className="field">
                <label>Busstop</label><br/>
                <input
                    className='inputPark'
                    type="text"
                    value={busstop}
                    onChange={(e) => setBusstop(e.target.value)}
                /><br/>
            </div>
            <div className="coordinates">
                <h3 className="input-header">Koordinaten</h3>
                <div className="lat-input">
                    <label>Latitude</label><br/>
                    <input
                        max={90}
                        min={-90}
                        className='inputPark'
                        type="number"
                        step="any"
                        required
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                /><br/>
                </div>
                <div className="long-input">
                    <label>Longitude</label><br/>
                    <input
                        max={180}
                        min={-180}
                        className='inputPark'
                        type="number"
                        step="any"
                        required
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                /><br/>
                </div>
            </div>
            <h3 className="input-header">Hindernisse</h3>
            <select className="obstacle-choose" vlaue={ObstacleID} onChange={(e) => setObstacleID(e.target.value)}>
                <option value={1}>Bank</option>
                <option value={2}>Flatrail</option>
                <option value={3}>Funbox</option>
                <option value={4}>Gap</option>
                <option value={5}>Handrail</option>
                <option value={6}>Jumpramp</option>
                <option value={7}>Manualpad</option>
                <option value={8}>Miniramp</option>
                <option value={9}>Bowl</option>
                <option value={10}>Quarter</option>
                <option value={11}>Wallride</option>            
            </select>
            <select className="difficulty-choose" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>       
            </select>
            <button type="button" className="add-obstacle-button" onClick={addObstacle}>Hinderniss hinzufügen</button><br />
            <div className="table-center">
            <table className="obstacle-table">
                <thead>
                <tr>
                    <th>Hinderniss</th>
                    <th>Schwierigkeit</th>
                    <th className="remove-obstacle">Hinderniss entfernen</th>
                </tr>
                </thead>
                <tbody>
                {obstacles.map(obstacle => (
                            <tr key={obstacle.id}>
                                <td>{//eslint-disable-next-line
                                obstacle.ObstacleID == 1 &&
                                <>
                                Bank
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 2 &&
                                <>
                                Flatrail
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 3 &&
                                <>
                                Funbox
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 4 &&
                                <>
                                Gap
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 5 &&
                                <>
                                Handrail
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 6 &&
                                <>
                                Jumpramp
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 7 &&
                                <>
                                Manualpad
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 8 &&
                                <>
                                Miniramp
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 9 &&
                                <>
                                Bowl
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 10 &&
                                <>
                                Quarter
                                </>
                                }{//eslint-disable-next-line
                                    obstacle.ObstacleID == 11 &&
                                <>
                                    Wallride
                                </>
                                }
                                </td>
                                <td>{obstacle.difficulty}</td>
                                <td className="button-td"><button type="button" name={obstacle.listId} onClick={removeObstacleFromList} className="remove-obstacle-from-list">Entfernen</button></td>
                            </tr>
                ))}
                </tbody>
            </table>
            </div>
            {!isPending && <button type="submit" className='add-park-button'>Park hinzufügen</button>}
            {isPending && <button disabled className='add-park-button'>Loading...</button>}
            </form>  
        </div>
    </div>
    )
}

export default AddPark;