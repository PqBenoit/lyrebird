import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const VoiceCard = ({ result }) => (
  <Card>
   <CardContent>
     <Typography variant="headline" component="h2">
       {result.name}
     </Typography>
     <Typography color="textSecondary">
       {result.description}
     </Typography>
   </CardContent>
  </Card>
);

VoiceCard.propTypes = {
  result: PropTypes.object.isRequired
}

export default VoiceCard;
