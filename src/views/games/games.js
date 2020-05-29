import React, { useState, useEffect, useContext } from "react";
import API from "../../api/mock/Api";
import Game from "../../components/game/game";
import { AuthContext } from "../../providers/authProvider";
import useStyles from "./gamesStyle";

export default function () {
    const classes = useStyles();

    const [games, setGames] = useState([]);
    const authContext = useContext(AuthContext);

    const getGames = async () => {
        const response = await API.getRefereeGames();
        setGames(response);
    };

    useEffect(() => {
        getGames();
    }, []);

    const validatePermission = (referees) => {
        const { user } = authContext.state;
        return user &&
            user.roles.indexOf("REFEREE") >= 0 && referees.map(referee => referee.userName).indexOf(user.username) >= 0;
    }
    return games.length < 0 ? (
        <div>in Games</div>
    ) : (
            <div className={classes.gameContainer}>
                {games.map((game) => {
                    return (
                        <Game
                            key={game.gameId}
                            gameId={game.gameId}
                            hostTeam={game.hostTeam}
                            guestTeam={game.guestTeam}
                            field={game.field}
                            gameDate={game.gameDate.replace('T', ' ')}
                            referees={game.referees}
                            gameEvents={game.gameEvents}
                            gameScore={game.gameScore}
                            canEdit={validatePermission(game.referees)}
                        />
                    );
                })}
            </div>
        );
}