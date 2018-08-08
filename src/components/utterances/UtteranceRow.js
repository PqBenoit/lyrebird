import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { getUtteranceDownloadLink ,downloadUtterance } from '../../api/lyrebirdApi';
import SaveAlt from '@material-ui/icons/SaveAlt';

class UtteranceRow extends Component {
  constructor(props){
    super(props)

    this.state = {
      ...props,
      audioFileUrl: ''
    }
  }

  componentDidMount() {
    const { utterance } = this.state;

    getUtteranceDownloadLink(utterance).then(response => {
      this.setState({ audioFileUrl: response.data.url })
    }).catch(error => {
      throw(error);
    });
  }

  download = () => {
    const { utterance } = this.state;
    downloadUtterance(utterance);
  }

  render(){
    const { utterance, fetchVoiceName, audioFileUrl } = this.state;

    return(
      <TableRow key={utterance.id}>
        <TableCell>
          <Player url={audioFileUrl} />
        </ TableCell>
        <TableCell>
          {fetchVoiceName(utterance.voice_id)}
        </TableCell>
        <TableCell>{utterance.text}</TableCell>
        <TableCell>{utterance.metadata.emotion}</TableCell>
        <TableCell>
          <Typography
            className='hover-pointer'
            onClick={() => { this.download() }}
            color="primary"
          >
            <SaveAlt />
          </Typography>
        </TableCell>
      </TableRow>
    )
  }
}

UtteranceRow.propTypes = {
  utterance: PropTypes.object.isRequired,
  fetchVoiceName: PropTypes.func.isRequired
}

export default UtteranceRow;
