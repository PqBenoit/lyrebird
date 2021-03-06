import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as utteranceActions from '../../actions/utteranceActions';
import VoiceSelect from './VoiceSelect'
import TextInput from './TextInput';
import MetadataSelect from './MetadataSelect';
import SubmitButton from './SubmitButton';
import Error from './Error';
import Loader from './Loader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class FormContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      voiceId: '',
      text: '',
      metadata: {
        emotion: {
          default: '',
          values: []
        }
      },
      errors: {
        voice: false
      },
      disabled: false
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.asyncJob.status === 'done'){
      this.setState({
        voiceId: '',
        text: '',
        metadata: {
          emotion: {
            default: '',
            values: []
          }
        },
        disabled: false
      });

      this.props.actions.loadUtterances();
    }
  }

  handleChange = event => {
    this.setState({ text: event.target.value });
  }

  handleVoiceSelect = event => {
    const { value } = event.target;

    this.setState({ voiceId: value });
    this.setMetadata(value);
    this.checkErrors(value);
  }

  handleMetadataSelect = event => {
    const { value } = event.target;
    const { values } = this.state.metadata.emotion;

    this.setState({ metadata: { emotion: { default: value, values: values }}});
  }

  onSubmit = event => {
    const { voiceId, text, metadata } = this.state;

    event.preventDefault();
    this.checkErrors(voiceId);

    if(!this.state.errors.voice){
      this.setState({ disabled: true })
      this.props.actions.generateUtterance({voiceId, text, metadata});
    }
  }

  checkErrors = voiceId => {
    voiceId.length === 0 ?
      this.setState({ errors: { voice: true } }) :
      this.setState({ errors: { voice: false } })
  }

  setMetadata = (voiceId) => {
    const { results } = this.props.voices;

    const voice = _.find(results, function(voice, key){
      return voice.id === voiceId
    });

    this.setState({ metadata: voice.supported_metadata })
  }

  render(){
    const { results } = this.props.voices
    const { status } = this.props.asyncJob
    const { voiceId, text, metadata, errors, disabled } = this.state

    return(
      <Grid item xs={12} className='pdt-20 pdb-20 form-container'>
        <Grid container justify='center' className='pdt-20 pdb-20'>
          <Typography variant="headline" component="h2">
            Generate utterance
          </Typography>
        </Grid>
        <Grid container justify='center' className='pdb-20'>
          <form onSubmit={this.onSubmit} className='pdb-20'>
            <VoiceSelect disabled={disabled}
                         voiceId={voiceId}
                         results={results}
                         handleSelect={this.handleVoiceSelect} />

            <TextInput disabled={disabled}
                       handleChange={this.handleChange}
                       text={text} />

           <MetadataSelect disabled={disabled}
                           default_value={metadata.emotion.default}
                           values={metadata.emotion.values}
                           handleSelect={this.handleMetadataSelect} />

            <SubmitButton disabled={disabled} />

            <Error type='voice'
                   show={errors.voice} />

            <Loader status={status} />
          </form>
        </Grid>
      </Grid>
    )
  }
}

FormContainer.propTypes = {
  voices: PropTypes.object.isRequired,
  asyncJob: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    voices: state.voices,
    asyncJob: state.asyncJob
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(utteranceActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
