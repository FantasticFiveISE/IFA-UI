import loginResponse from "./resources/loginResponse";
import teamsResponse from "./resources/teamsResponse";
import gamesResponse from "./resources/gameResponse";


export default class API {
  ENDPOINT = "localhost:8080";

  // Auth API
  login = async () => {
    const res = await setTimeout(() => {
      return loginResponse;
    }, 200);
    return res;
  };
  logout = () => {
    // POST to /logout with username?
  };//
  resigter = () => {
    // POST to /register with all things
  };

  // Teams API
  getAllTeams = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teamsResponse);
      }, 200);
    });
  };

  createTeam = () => {};

  // Leagues API
  getLeagues = () => {};
  updateLeague = () => {};

  // Games API
  getRefereeGames = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gamesResponse);
      }, 200);
    });
  };
  updateGame = () => {};
}
