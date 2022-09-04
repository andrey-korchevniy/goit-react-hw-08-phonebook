import { Link } from 'react-router-dom';
import { SvgDelete } from 'images/Svg';
import { NewContactForm } from 'components/NewContactForm/NewContactForm';

const NewContact = () => {
  return (
    <>
      <Link to={'/'}>
        {' '}
        <SvgDelete />
      </Link>
      <NewContactForm />
    </>
  );
};

export default NewContact;
