import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import SignIn from './routes/SignIn';
import Copyright from './Components/Copyright';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}

export default App;
