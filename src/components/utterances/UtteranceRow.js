import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UtteranceRow = ({ utterance, fetchVoiceName }) => (
  <TableRow key={utterance.id}>
    <TableCell component="th" scope="row">
      {fetchVoiceName(utterance.voice_id)}
    </TableCell>
    <TableCell>{utterance.text}</TableCell>
    <TableCell>{utterance.metadata.emotion}</TableCell>
  </TableRow>
)

UtteranceRow.propTypes = {
  utterance: PropTypes.object.isRequired,
  fetchVoiceName: PropTypes.func.isRequired
}

export default UtteranceRow;
