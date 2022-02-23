const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
        {value && <input type="number" required max={10} min={1}>Schwierigkeit</input>}
      </label>
    );
  };

  export default Checkbox;  