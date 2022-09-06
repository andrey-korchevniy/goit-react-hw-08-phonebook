import { useSelector } from 'react-redux';
import { getIsLoggedIn, getIsRefreshingUser } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirectTo }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshingUser);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
