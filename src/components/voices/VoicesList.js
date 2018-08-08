import React from 'react';
import PropTypes from 'prop-types';
import VoiceCard from './VoiceCard';
import Count from '../commons/Count';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const VoicesList = ({ results, count }) => (
  <Grid item xs={12} className='voices-list pdt-20 pdb-20'>
    <Grid container justify='center' className='pdt-20 pdb-20'>
      <Typography variant="headline" component="h2">
        Voices
      </Typography>
    </Grid>
    <Grid container justify='center' spacing={Number(16)}>
      {results.map(result => (
        <Grid key={result.id} item>
          <VoiceCard result={result} />
        </Grid>
      ))}
    </Grid>
    <Grid container justify='center' className='pdt-20 pdb-20'>
      <Count count={count} type='voices' />
    </Grid>
  </Grid>
)

VoicesList.propTypes = {
  results: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired
}

export default VoicesList;
