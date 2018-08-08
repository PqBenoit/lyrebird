import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const style = {
  margin: '0 20px',
  marginTop: '-20px'
}

const VoiceSelect = ({ voiceId, results, handleSelect, disabled }) => (
  <TextField
    className='w-175'
    style={style}
    disabled={disabled}
    required
    id="select-voice"
    select
    label="Select"
    value={voiceId}
    onChange={handleSelect}
    helperText="Select your voice"
  >
    {
      results.map(result => (
        <MenuItem key={result.id} value={result.id}>
          {result.name}
        </MenuItem>
      ))
    }
  </TextField>
)

VoiceSelect.propTypes = {
  voiceId: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default VoiceSelect;
