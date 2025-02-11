import { useState, useEffect } from "react";
import { gamesFetch } from "../services/api";

function GameLists({theme}) {
    const [gamesList, setGamesList] = useState([]);
    useEffect(() => {
        const getGames = async () => {
            const data = await gamesFetch();
            setGamesList(data.results);
        }
        getGames();
    }, [])

    const games = gamesList.map((game) => {
        return (
            <div className={`games-showcase ${theme}`} key={game.id}>
                <img src={game.background_image} alt="" />
                <h4>{game.name}</h4>
                <p>{game.released}</p>
                <h5>{`Rating: ${game.rating}`}</h5>
            </div>
        );
    })

    return (
        <div className="game-list" >
            {games.length > 0 ? games : <p>load....</p>}    
        </div>
    );
}

export default GameLists;