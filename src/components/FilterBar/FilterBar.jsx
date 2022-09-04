import { useDispatch, useSelector } from 'react-redux';
import {
  FilterForm,
  FilterField,
  FilterIcon,
  ClearFilterBtn,
} from './FilterBar.styled';
import { Formik } from 'formik';
import { SvgSearch, SvgDelete } from 'images/Svg';
import { clearFilter, setFilter } from 'redux/filterSlice';

export const FilterBar = () => {
  const { filter } = useSelector(state => state.filter);

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
          <SvgSearch />
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
          <SvgDelete />
        </ClearFilterBtn>
      </FilterForm>
    </Formik>
  );
};
