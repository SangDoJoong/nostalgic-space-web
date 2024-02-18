import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import SignIn from './routes/SignIn';
import Copyright from './Components/Copyright';
import * as React from 'react';
import { RecoilRoot } from 'recoil';
import RecoilTest from './routes/RecoilTest';
import SignUp from './routes/SignUp';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recoil-test" element={<RecoilTest />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </div>
    </RecoilRoot>
  );
}

export default App;
