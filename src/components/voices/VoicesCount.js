import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const VoicesCount = ({ count }) => (
  <Typography color="textSecondary">
    {`${count} voices total`}
  </Typography>
);

VoicesCount.propTypes = {
  count: PropTypes.number.isRequired
}

export default VoicesCount;
