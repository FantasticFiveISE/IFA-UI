import loginResponse from "./mock/resources/loginResponse";
import teamsResponse from "./mock//resources/teamsResponse";
import playersResponse from "./mock/resources/playersResponse";
import leaguesResponse from "./mock/resources/leaguesResponse";
import coachesResponse from "./mock/resources/coachesResponse";
import fieldsResponse from "./mock/resources/fieldsResponse";
import gameResponse from "./mock/resources/gameResponse";

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function getData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
class API {
  ENDPOINT = "http://localhost:8080";

  // Auth API
  //TODO: deleted autherized 
  // autherized is mock 
  login = (username, password) => {
    let autherized = true;
    return postData(this.ENDPOINT + '/login', { username, password });
  };

  logout = () => {
    // POST to /logout with username?
  }; //
  resigter = () => {
    // POST to /register with all things
  };

  // Teams API
  getAllTeams = async () => {
    // return getData(this.ENDPOINT + '/teams');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(teamsResponse);
      }, 200);
    });
  };

  createTeam = () => { };

  // Leagues API
  getLeagues = async (params) => {
    if (params.available) {
    return getData(this.ENDPOINT + '/leagues?available=true');
    }
  };
  updateLeague = () => { };

  // Games API
  getRefereeGames = async () => {
    return getData(this.ENDPOINT + '/games');

  };
  updateGame = () => { };

  // players Api
  getPlayers = async (params) => {
    if (params.available) {
      return getData(this.ENDPOINT + '/players?available=true');
    }

  };

  followGame = async (params) => {

  }

  // GET /coaches?available=true
  // GET /stadium?available=true

  getCoaches = async (params) => {
    if (params.available) {
      return getData(this.ENDPOINT + '/coaches?available=true');

    }
  };

  getFields = async (params) => {
    if (params.available) {
      return getData(this.ENDPOINT + '/fields?available=true');

    }
  };

}
export default new API();
