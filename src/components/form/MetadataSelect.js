import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const style = {
  margin: '0 20px',
  marginTop: '-20px'
}

const MetadataSelect = ({ default_value, values, handleSelect, disabled }) => (
  <TextField
    className='w-175'
    style={style}
    disabled={disabled}
    required
    id="select-emotion"
    select
    label="Select"
    value={default_value}
    onChange={handleSelect}
    helperText="Select emotion"
  >
    {
      values.map(value => (
        <MenuItem key={value} value={value}>
          {value}
          </MenuItem>
      ))
    }
  </TextField>
)

MetadataSelect.propTypes = {
  default_value: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default MetadataSelect;
