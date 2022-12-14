import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
  redirectTo,
  restricted = false,
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
