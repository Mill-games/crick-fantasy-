import React from "react";
import { players } from "./MockData";

const FantasyTeam = () => {
  return (
    <div>
      <h2>Fantasy Team</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - Score: {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FantasyTeam;
