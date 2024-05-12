import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import SignIn from './pages/user/sign_in';
import SignUp from './pages/user/sign_up';
import ProtectedRoute from './pages/utils/ProtectedRoute';
import Main from 'src/pages/main';
import MySpace from 'src/pages/my_spaces';
import { RecoilRoot } from 'recoil';
import * as React from 'react';
import MyPage from './pages/user/my_page';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/view" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/my" element={<MySpace />} />
          </Route>
          <Route path="/user">
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="my-page" element={<MyPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
