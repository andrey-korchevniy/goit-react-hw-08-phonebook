import AuthForm from 'components/AuthForm/AuthForm';

function LogIn() {
  const handleSubmit = formData => {
    formData.preventDefault();

    const userData = {
      email: formData.target[0].value,
      password: formData.target[1].value,
    };
  };

  return <AuthForm isLoginForm={true} handleSubmit={handleSubmit} />;
}

export default LogIn;
