import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import SignIn from './routes/SignIn';
import Main from 'src/pages/main';
import { RecoilRoot } from 'recoil';
import RecoilTest from './routes/RecoilTest';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/recoil-test" element={<RecoilTest />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
