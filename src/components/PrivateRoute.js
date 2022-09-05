import { useSelector } from 'react-redux';
import { getIsLoggedIn, getIsRefreshingUser } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, redirectTo }) {
  console.log(555);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshingUser);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(shouldRedirect);

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
