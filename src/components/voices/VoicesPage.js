import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as voicesActions from '../../actions/voiceActions';
import VoicesList from './VoicesList';

class VoicesPage extends Component {
  render(){
    const { voices } = this.props
    console.log(voices)

    return(
      <div>Hello</div>
    )
  }
}

VoicesPage.propTypes = {
  voices: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    voices: state.voices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(voicesActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VoicesPage);
