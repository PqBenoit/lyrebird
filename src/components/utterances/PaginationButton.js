import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const PaginationButton = ({ url, type, loadUtterances }) => (
  <Button
    disabled={url.length === 0}
    className='mgt-15'
    variant="contained"
    color="primary"
    onClick={() => {loadUtterances(url)}}
  >
    {type}
  </Button>
)

PaginationButton.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  loadUtterances: PropTypes.func.isRequired
}

export default PaginationButton;
