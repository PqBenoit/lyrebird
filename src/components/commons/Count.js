import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Count = ({ count, type }) => (
  <Typography color="textSecondary" className='count'>
    {`${count} ${type} total`}
  </Typography>
);

Count.propTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default Count;
