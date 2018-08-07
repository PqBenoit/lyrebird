import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const SubmitButton = ({ disabled }) => (
  <Button
    disabled={disabled}
    className='mgt-15'
    variant="contained"
    color="primary"
    type="submit"
  >
    Generate
  </Button>
)

SubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired
}

export default SubmitButton;
