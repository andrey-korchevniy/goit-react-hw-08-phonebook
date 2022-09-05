import { useDispatch, useSelector } from 'react-redux';
import {
  FilterForm,
  FilterField,
  FilterIcon,
  ClearFilterBtn,
} from './FilterBar.styled';
import { Formik } from 'formik';
import { clearFilter, setFilter } from 'redux/filter/filterSlice';
import { FaSearch } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { getFilter } from 'redux/selectors';

export const FilterBar = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(setFilter(data.currentTarget.value));
  };

  const onClear = () => {
    dispatch(clearFilter());
  };

  return (
    <Formik initialValues={''}>
      <FilterForm>
        <FilterIcon>
          <FaSearch />
        </FilterIcon>
        <FilterField
          type="text"
          name="filter"
          placeholder="Search contacts"
          onChange={onSubmit}
          required
          value={filter}
          autoComplete="off"
        />
        <ClearFilterBtn type="clear" onClick={onClear}>
          <CgClose size="2em" />
        </ClearFilterBtn>
      </FilterForm>
    </Formik>
  );
};
