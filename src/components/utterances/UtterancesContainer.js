import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UtterancesTable from './UtterancesTable';
import PaginationButton from './PaginationButton';
import Grid from '@material-ui/core/Grid';
import * as utteranceActions from '../../actions/utteranceActions';

export class Utterances extends Component {
  constructor(props){
    super(props)

    this.state = {
      utterances: props.utterances,
      search: ''
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.state.utterances !== nextProps.utterances){
      this.setState({ utterances: nextProps.utterances })
    }
  }

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

  onSearchChange = (event) => {
    const { value } = event.target;
    const { results } = this.props.utterances;

    const filterredResults = _.filter(results, result => {
      return result.text.toLowerCase().includes(value.toLowerCase());
    });

    this.setState({
      search: value,
      utterances: {
        ...this.state.utterance,
        results: filterredResults
      }
    });
  }

  render(){
    const { search } = this.state
    const { results } = this.state.utterances
    const { count, next, previous } = this.props.utterances

    return(
      <div className='mg-20 utterances-container'>
        <UtterancesTable results={results}
                         count={count}
                         search={search}
                         fetchVoiceName={this.fetchVoiceName}
                         onSearchChange={this.onSearchChange} />

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
