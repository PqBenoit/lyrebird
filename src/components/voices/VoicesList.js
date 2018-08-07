import React from 'react';
import PropTypes from 'prop-types';
import VoiceCard from './VoiceCard';
import VoicesCount from './VoicesCount';
import Grid from '@material-ui/core/Grid';

const VoicesList = ({ results, count, spacing }) => (
  <Grid item xs={12} className='pdt-30 pdb-30'>
    <Grid container justify='center' spacing={Number(spacing)}>
      {results.map(result => (
        <Grid key={result.id} item>
          <VoiceCard result={result} />
        </Grid>
      ))}
    </Grid>
    <Grid container justify='center' className='pdt-30 pdb-30'>
      <VoicesCount count={count} />
    </Grid>
  </Grid>
)

VoicesList.propTypes = {
  results: PropTypes.array.isRequired,
  spacing: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
}

export default VoicesList;
