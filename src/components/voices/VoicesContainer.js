import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import VoicesList from './VoicesList';

class VoicesContainer extends Component {
  render(){
    const { results, count } = this.props.voices

    return(
      <div className='voices-container'>
        <VoicesList results={results}
                    count={count} />
      </div>
    )
  }
}

VoicesContainer.propTypes = {
  voices: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    voices: state.voices
  };
}

export default connect(
  mapStateToProps
)(VoicesContainer);
