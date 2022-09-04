import { Label, InputField, ErrorInput } from './ContactInputLine.styled';
import PropTypes from 'prop-types';
import { PhoneInputField } from './PhoneInputField/PhoneInputField';
import 'react-phone-input-2/lib/style.css';
import React from 'react';
import { BiRename } from 'react-icons/bi';
import { IoMdPhonePortrait } from 'react-icons/io';

// line 'Name' or 'Number' - depends of props
export const ContactInputLine = ({ type, name, title, placeholder }) => {
  const component = name === 'number' ? PhoneInputField : null;

  return (
    <Label>
      {name === 'name' ? (
        <BiRename size="2em" />
      ) : (
        <IoMdPhonePortrait size="2em" />
      )}
      <InputField
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        component={component}
        required
      />
      <ErrorInput name={name} component="div" />
    </Label>
  );
};

ContactInputLine.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
