import React from 'react';

export class Filter extends React.Component {
  handleChange = (e) => {
    const { value } = e.currentTarget;
    this.props.handleSearch(value);
  };

  render() {
    const { filter } = this.props;
    return (
      <input
        type="text"
        placeholder="Search by name"
        onChange={this.handleChange}
        value={filter}
      />
    );
  }
};

