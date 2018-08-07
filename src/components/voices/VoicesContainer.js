import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as voicesActions from '../../actions/voiceActions';
import VoicesList from './VoicesList';

class VoicesContainer extends Component {
  render(){
    const { results, count } = this.props.voices

    return(
      <VoicesList results={results}
                  count={count} />
    )
  }
}

VoicesContainer.propTypes = {
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
)(VoicesContainer);
