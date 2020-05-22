import loginResponse from "./resources/loginResponse";
import teamsResponse from "./resources/teamsResponse";
import advancedProperties from "./resources/advancedPropResponse";

export default class API {
  ENDPOINT = "localhost:8080";

  // Auth API
  login = async () => {
    // const res = await setTimeout(() => {
    //   return loginResponse;
    // }, 200);
    // return res;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(loginResponse);
      }, 200);
    });
  };
  logout = () => {
    // POST to /logout with username?
  };
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

  createTeam =  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(advancedProperties);
      }, 200);
    });
  };
  // Leagues API
  getLeagues = () => {};
  updateLeague = () => {};

  // Games API
  getGames = () => {};
  updateGame = () => {};
}
