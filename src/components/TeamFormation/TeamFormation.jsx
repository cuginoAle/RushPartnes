import React from 'react';
import Team from './TeamFormationStyle.js';
import Player from '../Player/Player.jsx';

function TeamFormation(props) {

  let renderTeam = (team) => {
    return team.map((player, index) => {
      return (
        <li className={`formation_place_${player.formation_place}`} key={index}>
          <Player {...player} />
        </li>
      )
    })

  }

  return (
    <Team className={`team formation_${props.formation}`}>
      <header>
        <h2 className="teamName">
          {props.team}
        </h2>
        <span>({props.formation})</span>
      </header>

      <ul className="team_formation">
        {renderTeam(props.players || [])}
      </ul>
    </Team>
  )
}



export default TeamFormation;