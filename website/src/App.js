import './App.css';
import Navbar from './staticViews/Navbar';
import Parks from './parks/Parks';
import Home from './staticViews/Home';
import ParkDetails from './parks/ParkDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <header>header</header>
        </div>

        <div className="Navbar">
          <Navbar />
        </div>

        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parks" element={<Parks />} />
            <Route path="/skateparks/:id" element={<ParkDetails />} />
          </Routes>
        </div>

        <div className="footer">
          <footer>
            <h2>Hey</h2>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
