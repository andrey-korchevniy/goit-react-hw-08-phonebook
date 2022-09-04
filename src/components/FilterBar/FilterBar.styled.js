import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FilterForm = styled(Form)`
  max-width: 725px;
  width: 100%;
  position: relative;
  display: flex;
  height: 48px;
  margin-top: 10px;
`;
export const FilterField = styled(Field)`
  margin-left: 0px;
  height: 42px;
  width: calc(100% - 58px);
  padding-left: 58px;
  font-size: 16px;
  background-color: #f1f3f4;
  border: none;
  outline: none;

  :focus,
  :active {
    outline: none;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
  }
`;
export const FilterIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 5px;
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
`;
export const ClearFilterBtn = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  height: 40px;
  width: 40px;
  border: 0;
  background-color: transparent;
  border: 0;
  border-radius: 50%;

  :focus,
  :hover {
    background-color: rgba(60, 64, 67, 0.1);
  }
`;
