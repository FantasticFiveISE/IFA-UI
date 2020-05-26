import React, { useState, useEffect } from "react";
import API from "../../api/mock/Api";
import Game from "../../components/game/game";
import { makeStyles } from "@material-ui/core/styles";

export default function () {
    //const classes = useStyles();
    const [games, setGames] = useState([]);

    const getGames = async () => {
        const response = await API.getRefereeGames();
        setGames(response);
    };

    useEffect(() => {
        getGames();
    }, []);

    return games.length < 0 ? (
        <div>in Games</div>
    ) : (
            <div>
                <ul>
                    {games.map((game) => {
                        //console.log(game);
                        return (
                            <Game
                                key={game.gameId}
                                gameId={game.gameId}
                                hostTeam={game.hostTeam}
                                guestTeam={game.guestTeam}
                                field={game.field}
                                gameDate={game.gameDate.replace('T',' ')}
                                referees={game.referees}
                                gameEvents={game.gameEvents}
                                gameScore={game.gameScore}
                            />
                        );
                    })}
                </ul>
            </div>
        );
}