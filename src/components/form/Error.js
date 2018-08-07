import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Error = ({ type, show }) => {
  if(show){
    return(
      <Typography color='error'>
        {`${type} is required`}
      </Typography>
    );
  } else {
    return null;
  }
}

Error.propTypes = {
  type: PropTypes.string.isRequired,
  show:  PropTypes.bool.isRequired
}

export default Error;
