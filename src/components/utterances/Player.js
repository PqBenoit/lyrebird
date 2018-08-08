import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilled from '@material-ui/icons/PauseCircleFilled';

const Player = ({ url }) => {
  if(url.length){
    return(
      <audio controls>
        <source src={url} type="audio/wav" />
      </audio>
    )
  } else {
    return null
  }
}

Player.propTypes = {
  url: PropTypes.string.isRequired
}

export default Player;
