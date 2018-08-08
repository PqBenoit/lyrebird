import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const UtteranceRow = ({ utterance }) => (
  <TableRow key={utterance.id}>
    <TableCell component="th" scope="row">
      {"female voice"}
    </TableCell>
    <TableCell>{utterance.text}</TableCell>
  </TableRow>
)

UtteranceRow.propTypes = {
  utterance: PropTypes.object.isRequired
}

export default UtteranceRow;
