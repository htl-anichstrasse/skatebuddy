import { useState } from "react";
import "./AddPark.css";
import Checkbox from '../Form/Checkbox.js'



const AddPark = () =>{

    const [parkName, setParkName] = useState();
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const [checkedMiniramp, setCheckedMiniramp] = useState();

    const changeChecked = () =>{
        setCheckedMiniramp(!checkedMiniramp);
    };

    return(
        <div className="register-form">
        <div className="register-in-box">
        <h1>Fügen Sie einen Park hinzu</h1>
        <form>
            <div className="field">
                <label>Parkname</label><br/>
                <input
                    className='inputPark'
                    type="text"
                    required
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}
                /><br/>
            </div>
            <div className="field">
                <label>Addresse</label><br/>
                <input
                    className='inputPark'
                    type="text"
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}
                /><br/>
            </div>
            <div className="field">
                <label>Busstop</label><br/>
                <input
                    className='inputPark'
                    type="text"
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}
                /><br/>
            </div>
            <div className="coordinates">
                <h3 className="input-header">Koordinaten</h3>
                <div className="lat-input">
                    <label>Latitude</label><br/>
                    <input
                        className='inputPark'
                        type="number"
                        required
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                /><br/>
                </div>
                <div className="long-input">
                    <label>Longitude</label><br/>
                    <input
                        className='inputPark'
                        type="number"
                        required
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                /><br/>
                </div>
            </div>
            <h3 className="input-header">Hindernisse</h3>
            <div className="obstacles-input">
                <Checkbox
                    label="Miniramp"
                    value={checkedMiniramp}
                    onChange={changeChecked}
                />
            </div>
            <button type="submit" className='add-park-button'>Park hinzufügen</button>
        </form>
        </div>
    </div>
    )
}

export default AddPark;