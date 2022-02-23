import { useState } from "react";
import "./AddPark.css";
import Checkbox from '../Form/Checkbox.js'



const AddPark = () =>{

    const [parkName, setParkName] = useState();
    const [address, setAddress] = useState();
    const [busstop, setBusstop] = useState();
    const [isPending, setIsPending] = useState();
    
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [bank, setBank] = useState();
    const [flatrail, setFlatrail] = useState();
    const [funbox, setFunbox] = useState();
    const [gap, setGap] = useState();
    const [handrail, setHandrail] = useState();
    const [jumpramp, setJumpranp] = useState();
    const [manualpad, setManualpad] = useState();
    const [miniramp, setMiniramp] = useState();
    const [bowl, setBowl] = useState();
    const [quarter, setQuarter] = useState();
    const [wallride, setWallride] = useState();

    const [bankDifficulty, setBankDifficulty] = useState();
    const [flatrailDifficulty, setFlatrailDifficulty] = useState();
    const [funboxDifficulty, setFunboxDifficulty] = useState();
    const [gapDifficulty, setGapDifficulty] = useState();
    const [handrailDifficulty, setHandrailDifficulty] = useState();
    const [jumprampDifficulty, setJumpranpDifficulty] = useState();
    const [manualpadDifficulty, setManualpadDifficulty] = useState();
    const [minirampDifficulty, setMinirampDifficulty] = useState();
    const [bowlDifficulty, setBowlDifficulty] = useState();
    const [quarterDifficulty, setQuarterDifficulty] = useState();
    const [wallrideDifficulty, setWallrideDifficulty] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const park = { parkName, address, busstop, latitude, longitude }

        setIsPending(true)

        fetch('', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(park)
        }).then(() => {
            window.location.reload(true);
        })
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
                    value={parkName}
                    onChange={(e) => setParkName(e.target.value)}
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
                        className='inputPark'
                        type="number"
                        required
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                /><br/>
                </div>
            </div>
            <h3 className="input-header">Hindernisse</h3>
            <div className="obstacles-input">
                <Checkbox
                    label="Bank"
                    value={bank}
                    onChange={ () => setBank(!bank)}
                    difficulty={bankDifficulty}
                    difficultyChange={ (e) => setBankDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Flatrail"
                    value={flatrail}
                    onChange={ () => setFlatrail(!flatrail)}
                    difficulty={flatrailDifficulty}
                    difficultyChange={ (e) => setFlatrailDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Funbox"
                    value={funbox}
                    onChange={ () => setFunbox(!funbox)}
                    difficulty={funboxDifficulty}
                    difficultyChange={ (e) => setFunboxDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Gap"
                    value={gap}
                    onChange={ () => setGap(!gap)}
                    difficulty={gapDifficulty}
                    difficultyChange={ (e) => setGapDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Handrail"
                    value={handrail}
                    onChange={ () => setHandrail(!handrail)}
                    difficulty={handrailDifficulty}
                    difficultyChange={ (e) => setHandrailDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Jumpramp"
                    value={jumpramp}
                    onChange={ () => setJumpranp(!jumpramp)}
                    difficulty={jumprampDifficulty}
                    difficultyChange={ (e) => setJumpranpDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Manualpad"
                    value={manualpad}
                    onChange={ () => setManualpad(!manualpad)}
                    difficulty={manualpadDifficulty}
                    difficultyChange={ (e) => setManualpadDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Miniramp"
                    value={miniramp}
                    onChange={ () => setMiniramp(!miniramp)}
                    difficulty={minirampDifficulty}
                    difficultyChange={ (e) => setMinirampDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Bowl"
                    value={bowl}
                    onChange={ () => setBowl(!bowl)}
                    difficulty={bowlDifficulty}
                    difficultyChange={ (e) => setBowlDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Quarter"
                    value={quarter}
                    onChange={ () => setQuarter(!quarter)}
                    difficulty={quarterDifficulty}
                    difficultyChange={ (e) => setQuarterDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
                <Checkbox
                    label="Wallride"
                    value={wallride}
                    onChange={ () => setWallride(!wallride)}
                    difficulty={wallrideDifficulty}
                    difficultyChange={ (e) => setWallrideDifficulty(e.target.value)}
                />
            </div>
            <div className="obstacles-input">
            </div>
            {!isPending && <button type="submit" className='add-park-button'>Park hinzufügen</button>}
        </form>
        </div>
    </div>
    )
}

export default AddPark;