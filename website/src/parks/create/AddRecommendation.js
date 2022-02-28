import { useState } from "react";

const list = [];

const AddRecommendation = () =>{

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [busstop, setBusstop] = useState();
    const [isPending, setIsPending] = useState(false);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [description, setDescription] = useState("Bank");
    const [difficulty, setDifficulty] = useState(1);
    const [obstacles, setObstacles] = useState(list);
    const [id, setId] = useState(1);

    const saveProposal = (e) =>{
        e.preventDefault()
        const park = { name, address, busstop, latitude, longitude, obstacles }

        setIsPending(true)

        fetch('', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(park)
        }).then(() => {
        })
    }

    const addObstacle = (e) =>{
        const newList = obstacles.concat({ id, description, difficulty });
        setId(id+1)
        setObstacles(newList);
    }


    const removeObstacleFromList = (e) =>{
        const idOb = e.target.getAttribute("name")
        // eslint-disable-next-line eqeqeq
        setObstacles(obstacles.filter(item => item.id != idOb))
    }

    return(
            <div className="register-form">
            <div className="register-in-box">
            <h1>Erstelle einen Vorschlag</h1>
            <form onSubmit={saveProposal}>
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
                            required
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                    /><br/>
                    </div>
                </div>
                <h3 className="input-header">Hindernisse</h3>
                <select className="obstacle-choose" vlaue={description} onChange={(e) => setDescription(e.target.value)}>
                    <option value="Bank">Bank</option>
                    <option value="Flatrail">Flatrail</option>
                    <option value="Funbox">Funbox</option>
                    <option value="Gap">Gap</option>
                    <option value="Handrail">Handrail</option>
                    <option value="Jumpramp">Jumpramp</option>
                    <option value="Manualpad">Manualpad</option>
                    <option value="Miniramp">Miniramp</option>
                    <option value="Bowl">Bowl</option>
                    <option value="Quarter">Quarter</option>
                    <option value="Wallride">Wallride</option>            
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
                                    <td>{obstacle.description}</td>
                                    <td>{obstacle.difficulty}</td>
                                    <td className="button-td"><button type="button" name={obstacle.id} onClick={removeObstacleFromList} className="remove-obstacle-from-list">Entfernen</button></td>
                                </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                {!isPending && <button type="submit" className='add-park-button'>Vorschlag speichern</button>}
                {isPending && <button disabled className='add-park-button'>Loading...</button>}
                </form>  
            </div>
        </div>
    )
}

export default AddRecommendation;