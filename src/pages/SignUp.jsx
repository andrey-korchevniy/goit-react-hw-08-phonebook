import AuthForm from 'components/AuthForm/AuthForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = formData => {
    formData.preventDefault();

    const userData = {
      name: formData.target[0].value,
      email: formData.target[1].value,
      password: formData.target[2].value,
    };
    dispatch(register(userData));
  };

  return <AuthForm handleSubmit={handleSubmit} />;
}
