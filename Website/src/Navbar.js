import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
           <div className="links">
                <Link to="/" style={{
                    color:'white',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                    marginRight: '5px'
                }}>Home</Link>
                <Link to="/parks" style={{
                    
                }}>Parks</Link>
            </div>
        </nav>
    );
}

export default Navbar;