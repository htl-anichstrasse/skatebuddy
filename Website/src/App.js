import './App.css';
import Navbar from './Navbar';
import Parks from './Parks/Parks';
import Home from './Home';
import ParkDetails from './Parks/ParkDetails';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        <div className="Header">
        <header>Header</header>
        </div>
        <div className="Navbar">
            <Navbar />
        </div>
          <div className="Content">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/parks" element={<Parks/>}/>
              <Route path="/skateparks/:id" element={<ParkDetails/>}/>
           </Routes>
          </div>
        <div className="Footer">
          <footer>Footer</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
