import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';

const TextInput = ({ text, handleChange, disabled }) => (
  <TextField
    disabled={disabled}
    required
    label="Text"
    multiline
    rowsMax="6"
    value={text}
    onChange={handleChange}
    margin="normal"
  />
)

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default TextInput;
