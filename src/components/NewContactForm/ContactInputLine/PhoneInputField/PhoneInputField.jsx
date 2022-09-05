import { PhoneInputLine } from './PhoneInputField.styled';
import PropTypes from 'prop-types';

export const PhoneInputField = ({ field, form }) => {
  return (
    <PhoneInputLine
      country={'ua'}
      value={field.value}
      onChange={number => (form.values.number = number)}
    />
  );
};

PhoneInputField.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object.isRequired,
};
