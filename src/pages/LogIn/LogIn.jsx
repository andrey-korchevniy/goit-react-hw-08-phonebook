import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

export default function LogIn() {
  const dispatch = useDispatch();

  const handleSubmit = formData => {
    formData.preventDefault();
    const userData = {
      email: formData.target[0].value,
      password: formData.target[1].value,
    };

    dispatch(logIn(userData));
  };

  return <AuthForm isLoginForm={true} handleSubmit={handleSubmit} />;
}
