import React from 'react';
import PropTypes from 'prop-types';
import { selectFilter } from '../../redux/store';
import { setFilter } from 'redux/slice';
import { useSelector, useDispatch } from 'react-redux';


const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = value => {
    dispatch(setFilter(value));
  };

  const handleByFilter = e => {
    const value = e.target.value;
    handleFilterChange(value.trim().toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      onChange={handleByFilter}
      value={filter}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Filter;


