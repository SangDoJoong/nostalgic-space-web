import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
