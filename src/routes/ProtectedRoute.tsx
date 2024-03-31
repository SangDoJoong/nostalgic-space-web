import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from '../recoil/atoms/auth';

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoggedInState);
  const currentLocation = useLocation();

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate
      to={'/sign-in'}
      replace
      state={{ from: currentLocation.pathname }}
    />
  );
};

export default ProtectedRoute;
