import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const VoiceCard = ({ result }) => (
  <div className='voice-card'>
   <CardContent>
     <Typography variant="subheading" component="h3">
       {result.name}
     </Typography>
     <Typography color="textSecondary">
       {result.description}
     </Typography>
   </CardContent>
  </div>
);

VoiceCard.propTypes = {
  result: PropTypes.object.isRequired
}

export default VoiceCard;
