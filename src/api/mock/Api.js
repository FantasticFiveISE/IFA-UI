import loginResponse from "./resources/loginResponse";
import teamsResponse from "./resources/teamsResponse";
import playersResponse from "./resources/playersResponse";
import leaguesResponse from "./resources/leaguesResponse";
import coachesResponse from "./resources/coachesResponse";
import fieldsResponse from "./resources/fieldsResponse";
import gameResponse from "./resources/gameResponse";


class API {
  ENDPOINT = "localhost:8080";

  // Auth API
  //TODO: deleted autherized 
  // autherized is mock 
  login = (username, password) => {
    let autherized = true;
    if (autherized) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            {
              ...loginResponse, username: username
            }
          );
        }, 200);
      });
    } else {
      return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
        setTimeout(() => {
          reject(new Error("invalid info: please check userName or password!"));
        }, 200);
      });
    }
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

  createTeam = () => { };

  // Leagues API
  getLeagues = async (params) => {
    // Need to filter by params in better way
    if (params.available) {
      //fecth("get", ENDPOINT + /players?available=true);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(leaguesResponse);
        }, 200);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(leaguesResponse);
        }, 200);
      });
    }
  };
  updateLeague = () => { };

  // Games API
  getRefereeGames = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(gameResponse);
      }, 200);
    });
  };
  updateGame = () => { };

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

  followGame = async(params) => {
    
  }

  // GET /coaches?available=true
  // GET /stadium?available=true

  getCoaches = async (params) => {
    // Need to filter by params in better way
    if (params.available) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(coachesResponse);
        }, 200);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(coachesResponse);
        }, 200);
      });
    }
  };

  getFields = async (params) => {
    // Need to filter by params in better way
    if (params.available) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fieldsResponse);
        }, 200);
      });
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fieldsResponse);
        }, 200);
      });
    }
  };

}
export default new API();
//