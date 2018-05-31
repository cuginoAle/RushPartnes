import React from 'react';
import PlayerWrapper from './PlayerStyle.js';

function Player(props){
  return (
    <PlayerWrapper>
      <div className="imgWrapper">
        <img className="shirtImg" src="/build/assets/player-shirt.png" alt="" />
      </div>
      <span className="name">{props.name}</span>
      <span className="number">{props.formation_place}</span>
    </PlayerWrapper>
  )
}

export default Player;
