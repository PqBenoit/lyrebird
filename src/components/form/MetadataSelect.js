import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const MetadataSelect = ({ default_value, values, handleSelect, disabled }) => (
  <FormControl required>
    <InputLabel htmlFor="voice-required">Emotion</InputLabel>
    <Select
      disabled={disabled}
      value={default_value}
      onChange={handleSelect}
      name="emotion"
      inputProps={{
        id: 'emotion-required',
      }}
    >
      {values.map(value => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

MetadataSelect.propTypes = {
  default_value: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default MetadataSelect;
