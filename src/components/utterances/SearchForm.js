import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const SearchForm = ({ search, onSearchChange }) => (
  <Grid item xs={12} className='pdt-20 pdb-20'>
    <Grid container justify='center' className='pdt-20 pdb-20'>
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
