import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import ProtectedRoute from './routes/ProtectedRoute';
import Main from 'src/pages/main';
import { RecoilRoot } from 'recoil';
import * as React from 'react';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
