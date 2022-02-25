import './App.css';
import Navbar from './staticViews/Navbar';
import Parks from './parks/Parks';
import Home from './staticViews/Home';
import ParkDetails from './parks/ParkDetails';
import LogIn from './account/LogIn';
import CreateAccount from './account/CreateAccount';
import AllMap from './parks/map/AllMap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './account/Profile';
import AuthService from './account/Auth/auth-service';
import AddPark from './parks/AddPark.js'
import { useEffect } from 'react';

function App() {

  if(localStorage.getItem("user")){
    AuthService.decodeToken(JSON.parse(localStorage.getItem("user")).token)
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    document.title ="Skatebuddy"
  },[])

  return (
    <Router>
      <div className="App">
          <header>
          <div className="Header">
            </div>
            <div className="Navbar">
            <Navbar />
            </div>
          </header>
          <div className="Content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/parks" element={<Parks />} />
              <Route path="/skateparks/:id" element={<ParkDetails />} />
              <Route path="/LogIn" element={<LogIn />}/>
              <Route path="/CreateAccount" element={<CreateAccount/>}/>
              <Route path="/AllMap" element={<AllMap/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/AddPark" element={<AddPark/>}/>
            </Routes>
          </div>
        </div>
        <div className="footer">
          <footer>
          <div className="footer-wrap">
          <button onClick={topFunction} id="myBtn" title="Go to top" className="top-button">Top</button>
                <div className="footer-top">
                  <p>Haben Sie fragen können Sie uns unter einer der folgende Emails erreichen</p>
                    <div className="frame-default">
                        <div className="footer-address">
                              <span itemProp="name">Alexander Bertoni</span> | <a href="mailto:abertoni@tsn.at" title="SchulEmail - E-Mail"><span itemProp="email">abertoni@tsn.com</span></a><br/>
                              <span itemProp="name">Philipp Schuler</span> | <a href="mailto:pschuler@tsn.at" title="SchulEmail - E-Mail"><span itemProp="email">pschuler@tsn.com</span></a><br/>
                              <span itemProp="name">Maximilian Neuner</span> | <a href="mailto:maximilineuner@tsn.at" title="SchulEmail - E-Mail"><span itemProp="email">maximilineuner@tsn.com</span></a><br/>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="frame-default"><p>Vielen Dank, dass Sie sich für Skatebuddy entschieden haben</p></div>
                        </div>
                    </div>
                </div>
          </footer>
        </div>
    </Router>
  );
}

export default App;
