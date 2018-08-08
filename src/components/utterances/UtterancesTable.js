import React from 'react';
import PropTypes from 'prop-types';
import UtteranceRow from './UtteranceRow';
import Count from '../commons/Count';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const UtteranceTable = ({ results, count, fetchVoiceName }) => (
  <Grid item xs={12} className='pdt-20 pdb-20'>
    <Grid container justify='center' className='pdt-20 pdb-20'>
      <Typography variant="headline" component="h2">
        Utterances
      </Typography>
    </Grid>
    <Grid container justify='center'>
      <Count count={count} type='utterances' />
    </Grid>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Voice</TableCell>
          <TableCell>Text</TableCell>
          <TableCell>Emotion</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          results.map(result => {
            return (
              <UtteranceRow utterance={result}
                            fetchVoiceName={fetchVoiceName}
                            key={result.id} />
            );
          })
        }
      </TableBody>
    </Table>
  </Grid>
)

UtteranceTable.propTypes = {
  results: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  fetchVoiceName: PropTypes.func.isRequired
}

export default UtteranceTable;
