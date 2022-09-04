import { PhoneInputLine } from './PhoneInputField.styled';

export const PhoneInputField = ({ field, form }) => {
  return (
    <PhoneInputLine
      country={'ua'}
      value={field.value}
      onChange={phone => (form.values.phone = phone)}
    />
  );
};
