import React from 'react';
import PropTypes from 'prop-types';
import { selectFilter } from '../../redux/store';
import { useSelector } from 'react-redux';


const Filter = ({ handleSearch }) => {
  const filter = useSelector(selectFilter);
  const handleByFilter = e => {
    const value = e.target.value;
    handleSearch(value.trim().toLowerCase());
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


