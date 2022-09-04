import { Link } from 'react-router-dom';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';
import { CgClose } from 'react-icons/cg';

const NewContact = () => {
  return (
    <>
      <Link to={'/'}>
        {' '}
        <CgClose size="2em" />
      </Link>
      <NewContactForm />
    </>
  );
};

export default NewContact;
