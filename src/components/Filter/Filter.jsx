import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors.js';
import { filterContacts } from 'redux/contacts/filterSlice';
import { FilterInput, Icon, FilterTitle } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <FilterTitle>
      <Icon size="18" />
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={handleChangeFilter}
        placeholder="search"
      />
    </FilterTitle>
  );
};

export default Filter;
