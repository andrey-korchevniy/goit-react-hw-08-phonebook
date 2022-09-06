import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './AuthForm.module.css';
import { BiRename } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

function AuthForm({ isLoginForm = false, handleSubmit }) {
  const message = isLoginForm
    ? 'Please, log in to see your contacts'
    : 'Sign Up form';

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{message}</h2>
      <Form onSubmit={handleSubmit} id="authform">
        {isLoginForm ? null : (
          <Form.Group className={styles.label} controlId="formBasicName">
            <BiRename size="2em" />
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              className={styles.inputfield}
            />
          </Form.Group>
        )}
        <Form.Group controlId="formBasicEmail" className={styles.label}>
          <AiOutlineMail size="2em" />
          <Form.Control
            type="email"
            placeholder="Email"
            className={styles.inputfield}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className={styles.label}>
          <RiLockPasswordLine size="2em" />
          <Form.Control
            type="password"
            placeholder="Password"
            className={styles.inputfield}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className={styles.btn}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AuthForm;

AuthForm.propTypes = {
  isLoginForm: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
};
