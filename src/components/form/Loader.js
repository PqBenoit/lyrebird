import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Loader = ({ status }) => {
  if(status === 'processing'){
    return(
      <Grid container justify='center' className='loader'>
        <div className='center'>
          <CircularProgress />
          <Typography color='primary'>
            {status}
          </Typography>
        </div>
      </Grid>
    );
  } if(status === 'done') {
    return(
      <Grid container justify='center' className='loader'>
        <div className='center hide-in-2'>
          <Typography color='primary'>
            {status}
          </Typography>
        </div>
      </Grid>
    );
  } else {
    return null;
  }
}

Loader.propTypes = {
  status: PropTypes.string.isRequired
}

export default Loader;
