import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UtterancesTable from './UtterancesTable';
import PaginationButton from './PaginationButton';
import Grid from '@material-ui/core/Grid';
import * as utteranceActions from '../../actions/utteranceActions';

class Utterances extends Component {
  fetchVoiceName = (voiceId) => {
    const { results } = this.props.voices

    if(results.length){
      const voice = _.find(results, function(voice){
        return voice.id === voiceId
      });

      return voice.name;
    }

    return '';
  }

  loadUtterances = (url) => {
    this.props.actions.loadUtterances(url);
  }

  render(){
    const { results, count, next, previous } = this.props.utterances
    console.log(this.props.utterances)

    return(
      <div>
        <UtterancesTable results={results}
                         count={count}
                         fetchVoiceName={this.fetchVoiceName}/>

        <Grid item xs={12} className='pdt-20 pdb-20'>
          <Grid container justify='center' className='pdt-20 pdb-20'>
            <PaginationButton
              url={previous}
              type={'previous'}
              loadUtterances={this.loadUtterances}
            />
            <PaginationButton
              url={next}
              type={'next'}
              loadUtterances={this.loadUtterances}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

Utterances.propTypes = {
  utterances: PropTypes.object.isRequired,
  voices: PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    utterances: state.utterances,
    voices: state.voices
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
)(Utterances);
