import './App.css';
import Navbar from './Navbar';
import Parks from './Parks';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';


function App() {
  return (

    <Router>
      <div className="App">
        <div className="Navbar">
            <Navbar />
          </div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/parks" element={<Parks/>}/>
              <Route path="/*" element={<NotFound/>}/>
            </Routes>
          </div>

    </Router>
  );
}

export default App;
