import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const style = {
  margin: '0 10px'
}

const PaginationButton = ({ url, type, loadUtterances }) => (
  <Button
    style={style}
    disabled={url.length === 0}
    className='mgt-15 pagination-button'
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
