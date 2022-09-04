import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
  useCreateContactMutation,
  useGetMockApiQuery,
} from 'redux/mockApiSlice';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactInputLine } from './ContactInputLine/ContactInputLine';
import { Spinner } from 'components/UI/Spinner/Spinner';
import { Button } from 'pages/NewContact/NewContact.styled';

const validationSchema = yup.object().shape({
  name: yup.string().min(3).required(),
});

export const NewContactForm = () => {
  const history = useNavigate();

  // get contacts list
  const { data } = useGetMockApiQuery({ refetchOnFocus: true });

  const [createContact, { isError, isSuccess, isLoading }] =
    useCreateContactMutation();

  useEffect(() => {
    if (isSuccess) {
      Notify.success(`The contact has been created`);
      setTimeout(() => history('/'), 3000);
    }
  }, [isSuccess, history]);

  useEffect(() => {
    if (isError) {
      Notify.failure(`There was an error on our side. Something is wrong`);
    }
  }, [isError]);

  Notify.init({ position: 'center-top' });

  async function handleSubmit(formData) {
    const { name, phone } = formData;

    // check if there are any such contacts
    if (data.map(el => (el = el.name)).includes(name)) {
      Notify.failure(`A contact with name ${name} already is in your book`);
    } else if (data.map(el => (el = el.phone)).includes(phone)) {
      Notify.failure(`A contact with phone ${phone} already is in your book`);
    } else {
      createContact({
        name: name,
        phone: phone,
        isDeleted: false,
      });
    }
  }

  return (
    <>
      <Formik
        initialValues={{ name: '', phone: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Button type="submit" disabled={isLoading || isSuccess}>
            Save
          </Button>
          <hr></hr>
          <ContactInputLine
            type="text"
            name="name"
            title="Name cam contain only letters, numbers and hyphen"
            placeholder="Name"
          />
          <ContactInputLine
            type="tel"
            name="phone"
            title="Phone number must contain only numbers, spaces, hyphen and +"
            placeholder="Phone number"
          />
        </Form>
      </Formik>
      {isLoading && <Spinner />}
    </>
  );
};
