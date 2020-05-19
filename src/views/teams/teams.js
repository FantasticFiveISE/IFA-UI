import React, { useState, useEffect } from "react";
import API from "../../api/mock/Api";
import Team from "../../components/team/team";

export default function () {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    const response = await new API().getAllTeams();
    setTeams(response);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return teams.length < 0 ? (
    <div>in Teams</div>
  ) : (
    <ul>
      {teams.map((team) => {
        console.log(team);
        return <Team key={team.teamName} teamName={team.teamName} teamStatus={team.teamStatus}/>;
      })}
    </ul>
  );
}
