import AuthForm from 'components/AuthForm/AuthForm';

function SignUp() {
  const handleSubmit = formData => {
    formData.preventDefault();

    const userData = {
      name: formData.target[0].value,
      email: formData.target[1].value,
      password: formData.target[2].value,
    };
  };

  return <AuthForm handleSubmit={handleSubmit} />;
}

export default SignUp;
