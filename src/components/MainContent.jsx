import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
import GameLists from "./GameLists";
import { genresFetch } from "../services/api";
import { useState, useEffect } from "react";

function MainContent({theme}) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getGenres = async () => {
            const data = await genresFetch();
            setGenres(data.results);
        };
        getGenres();
    }, []);

    return (
        <main className="games-container">
            <Sidebar genres={genres}/>
            <HeroSection theme={theme}/>
            <GameLists theme={theme}/>
        </main>
    );
}

export default MainContent;