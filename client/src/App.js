import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Business from './Components/Business';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:business" element={<Business />} />
      </Routes>
    </div>
  );
}

export default App;
