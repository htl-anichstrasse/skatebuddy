import { Link } from 'react-router-dom';
import AuthService from '../account/Auth/auth-service';
import './Navbar.css';

const Navbar = () => {

  const token = AuthService.getCurrentUser()

  return (
    <nav className="navi">
        <Link to="/" className='home-nav' id="nav">
          Home
        </Link>
        <Link to="/parks" className='parks-nav' id="nav">
          Parks
        </Link>
        {token && 
        <Link to="/Profile" className='pofile-nav' id="nav">
          Profile
        </Link>
        }
        {!token &&
        <>
         <Link to="/LogIn" className='login-nav' id="nav">
          Login
        </Link>
        <Link to="/CreateAccount" className='createAccount-nav' id="nav">
              Account Erstellen
            </Link>
        </>
      }
    </nav>
  );
};

export default Navbar;
