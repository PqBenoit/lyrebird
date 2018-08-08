import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const SearchForm = ({ search, onSearchChange }) => (
  <Grid item xs={12} className='utterance-search-input'>
    <Grid container justify='left'>
      <form>
        <TextField
          id="search"
          label="Search by text"
          value={search}
          onChange={onSearchChange}
          margin="normal"
        />
      </form>
    </Grid>
  </Grid>
);

SearchForm.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
}

export default SearchForm;
