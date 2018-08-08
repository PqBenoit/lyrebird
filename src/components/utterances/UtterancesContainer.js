import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UtterancesTable from './UtterancesTable';

class Utterances extends Component {
  render(){
    console.log(this.props)
    const { results, count } = this.props.utterances

    return(
      <UtterancesTable results={results}
                       count={count} />
    )
  }
}

Utterances.propTypes = {
  utterances: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    utterances: state.utterances
  };
}

export default connect(
  mapStateToProps
)(Utterances);
