import loginResponse from "./mock/resources/loginResponse";

export default function API() {
  const ENDPOINT = "localhost:8080";

  // Auth API
  const login = async () => {
    const res = await setTimeout(() => {
      return loginResponse;
    }, 200);
    return res;
  };
  const logout = () => {
    // POST to /logout with username?
  };
  const resigter = () => {
    // POST to /register with all things
  };

  // Teams API
  const getAllTeams = () => {};
  const createTeam = () => {};

  // Leagues API
  const getLeagues = () => {};
  const updateLeague = () => {};

  // Games API
  const getGames = () => {};
  const updateGame = () => {};
}
