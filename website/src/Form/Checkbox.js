import "./Checkbox.css"

const Checkbox = ({ label, value, onChange, difficulty, difficultyChange }) => {
    return (
          <label>
            <div className="box-name">
              <input type="checkbox" checked={value} onChange={onChange} className="checkbox-input"/>  
              {label}
            </div>
            <div className="box-difficulty">
              {value && <input className="input-difficulty" type="number" required max={10} min={1} value={difficulty} onChange={difficultyChange}></input>}
            </div>
      </label>
    );
  };

  export default Checkbox;  