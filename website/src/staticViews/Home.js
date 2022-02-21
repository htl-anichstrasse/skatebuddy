import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import HomeSlideshow from './HomeSlideshow'


const Home = () => {

  return(
  <div className="home">
    <div className="welcome">
     <h1 className='welcomeHeader'>Skate<font color="darkred" className="buddy">buddy</font></h1>
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
      <div className="left-2">
        <HomeSlideshow></HomeSlideshow>
      </div>
    </div>
  </div>
);
};

export default Home;
