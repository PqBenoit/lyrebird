import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import VoiceSelect from './VoiceSelect'
import TextInput from './TextInput';
import MetadataSelect from './MetadataSelect';
import SubmitButton from './SubmitButton';
import Error from './Error';
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
      }
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
    const { values } = this.state.metadata.emotion

    this.setState({ metadata: { emotion: { default: value, values: values }}});
  }

  onSubmit = event => {
    const { voiceId } = this.state

    event.preventDefault()
    this.checkErrors(voiceId);
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
    const { voiceId, text, metadata, errors } = this.state

    return(
      <Grid item xs={12} className='pdt-30 pdb-30'>
        <Grid container justify='center' className='pdt-30 pdb-30'>
          <Typography variant="headline" component="h2">
            Generate utterance
          </Typography>
        </Grid>
        <Grid container justify='center' spacing={Number(16)}>
          <form className='form-container' onSubmit={this.onSubmit}>
            <VoiceSelect voiceId={voiceId}
                         results={results}
                         handleSelect={this.handleVoiceSelect} />

            <TextInput handleChange={this.handleChange}
                       text={text} />

            <br/>
            <MetadataSelect default_value={metadata.emotion.default}
                            values={metadata.emotion.values}
                            handleSelect={this.handleMetadataSelect} />
            <br/>
            <SubmitButton />

            <Error type='voice'
                   show={errors.voice} />
          </form>
        </Grid>
      </Grid>
    )
  }
}

FormContainer.propTypes = {
  voices: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    voices: state.voices
  };
}

export default connect(
  mapStateToProps
)(FormContainer);
