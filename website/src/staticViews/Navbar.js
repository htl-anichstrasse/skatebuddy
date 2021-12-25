import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav">
        <Link to="/" className='home'>
          Home
        </Link>
        <Link to="/parks" className='parks'>
          Parks
        </Link>
        <Link to="/LogIn" className='login'>
          Login
        </Link>
        <Link to="/CreateAccount" className='createAccount'>
          Account Erstellen
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
