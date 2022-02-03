import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
  return(
  <div className="home">
    <div className="welcome">
     <h1 className='welcomeHeader'>Willkommen bei</h1>
     <h1 className='welcomeHeader'>Skate<font color="#00FF00">buddy</font></h1>
     <Link to="/AllMap" className='createAccount-home'>
      <div className="left">
        <h3 className='allMapHeader'>Eine Map mit allen Parks finden Sie hier</h3>
          <img src={
            require('../parks/map/All-Map-Preview.JPG').default}
              className="AllMapPreview"
              alt="AllMap">
            </img>
      </div>
      </Link>
      <div className="logodiv">
      <img src={
      require('./logo.svg').default
      }
      className='logo' 
      alt="logo">
    </img>
      </div>
      <div className="left">
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
    </div>
  </div>
);
};

export default Home;
