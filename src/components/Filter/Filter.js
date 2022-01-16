import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

const Filter = ({ filterValue, handleChange }) => {
  return (
    <>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.inputField}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filterValue}
        onChange={handleChange}
      ></input>
    </>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filterValue: state.contacts.filter,
});

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(actions.changeFiler(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
