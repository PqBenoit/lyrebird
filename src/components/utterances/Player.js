import React from 'react';
import PropTypes from 'prop-types';

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
