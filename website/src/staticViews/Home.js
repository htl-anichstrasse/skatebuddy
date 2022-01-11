import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
  return(
  <div className="home">
    <div className="welcome">
     <h1>Herzlich Willkommen bei Skatebubatz.</h1>
      <div className="left">
        <h3>Hier geht es zu den Parks</h3>
        <Link to="/parks" className='createAccount-home'>
          Parks
        </Link>
      </div>
      <div className="right ">
        <h3>Loggen SIe sich in Ihren Account ein</h3>
        <Link to="/LogIn" className='login-home'>
          Login
        </Link>
        <br />
        <br />
        <h3>Oder erstellen Sie einen neune Account</h3>
        <Link to="/CreateAccount" className='create-account-home'>
          Account erstellen
        </Link>
      </div>
      <img src={
      require('./logo.svg').default
      }
      className='logo' 
      alt="logo">
    </img>
    </div>
  </div>
);
};

export default Home;
