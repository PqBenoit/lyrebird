import React from 'react'
import PropTypes from 'prop-types'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const VoiceSelect = ({ voiceId, results, handleSelect, disabled }) => (
  <FormControl required>
    <InputLabel htmlFor="voice-required">Voice</InputLabel>
    <Select
      disabled={disabled}
      value={voiceId}
      onChange={handleSelect}
      name="voice"
      inputProps={{
        id: 'voice-required',
      }}
    >
      {results.map(result => (
        <MenuItem key={result.id} value={result.id}>
          {result.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

VoiceSelect.propTypes = {
  voiceId: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default VoiceSelect;
