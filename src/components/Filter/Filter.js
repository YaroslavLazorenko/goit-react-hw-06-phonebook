import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getContactsFilter } from '../../redux/phonebook/phonebook-selectors';
import s from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.inputField}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      ></input>
    </>
  );
};

export default Filter;
