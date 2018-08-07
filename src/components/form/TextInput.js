import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';

const TextInput = ({ text, handleChange }) => (
  <TextField
    required
    label="Text"
    multiline
    rowsMax="4"
    value={text}
    onChange={handleChange}
    margin="normal"
  />
)

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default TextInput;
