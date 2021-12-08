import './App.css';
import Navbar from './Navbar';
import Parks from './Parks';
import Home from './Home';
import ParkDetails from './ParkDetails';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (

    <Router>
      <div className="App">
        <div className="Header">
        <h2>Header</h2>
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
          <h2>Footer</h2>
        </div>
      </div>
    </Router>
  );
}

export default App;
