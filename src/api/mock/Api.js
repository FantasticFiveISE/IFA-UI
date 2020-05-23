import loginResponse from "./resources/loginResponse";
import teamsResponse from "./resources/teamsResponse";
<<<<<<< HEAD
import gamesResponse from "./resources/gameResponse";


export default class API {
=======
import playersResponse from "./resources/playersResponse";
class API {
>>>>>>> origin/implement-teams-scenario
  ENDPOINT = "localhost:8080";

  // Auth API
  login = (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(loginResponse);
      }, 200);
    });
  };

  logout = () => {
    // POST to /logout with username?
  }; //
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

  // players Api
  getPlayers = async (params) => {
    // Need to filter by params in better way
    if (params.available) {  
      //fecth("get", ENDPOINT + /players?available=true);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(playersResponse);
        }, 200);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(playersResponse);
        }, 200);
      });
    }
  };

  // GET /coaches?available=true
  // GET /stadium?available=true

  getCoaches = async (params) => {
    // Need to filter by params in better way
    if (params.available) {  
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(playersResponse);
        }, 200);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(playersResponse);
        }, 200);
      });
    }
  };
}
export default new API();
