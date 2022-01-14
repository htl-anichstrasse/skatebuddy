import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
const token = localStorage.getItem('token');

const LogOut = () => {

  localStorage.removeItem('token');
  window.location.reload(false);
}

  return (
    <nav className="navbar">
      <div className="navi">
        <Link to="/" className='home-nav'>
          Home
        </Link>
        <Link to="/parks" className='parks'>
          Parks
        </Link>
        <Link to="/CreateAccount" className='createAccount'>
          Account Erstellen
        </Link>
        {token && 
            <div className="dropdown">
              <span>Profile</span>
              <div className="dropdown-content">
                <button onClick={LogOut} className='Logout'>
                  LogOut
                </button>
              </div>
            </div>
        }
        {!token && <Link to="/LogIn" className='login'>
          Login
        </Link>}
      </div>
    </nav>
  );
};

export default Navbar;
