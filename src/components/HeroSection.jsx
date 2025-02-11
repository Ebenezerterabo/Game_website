import { useState, useEffect } from "react";
import { developersFetch } from "../services/api";

function HeroSection({theme}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [developers, setDevelopers] = useState([]);

    useEffect(() => {
        const getDevelopers = async () => {
            const data = await developersFetch();
            setDevelopers(data.results);
        };
        getDevelopers();
    }, []);

    const handleNextImage = () => {
        setCurrentIndex((prevCurrentIndex) =>
            prevCurrentIndex === developers.length - 1 ? 0 : prevCurrentIndex + 1);
    }

    return (
        <div className="hero-section">
            { developers.length > 0 ? (

                <div className="hero-image">
                    <img src={developers[currentIndex].image_background} alt="" />
                    <button onClick={handleNextImage} className={theme}>Next</button>
                </div>
                
            ) : (
                <p>loading.......</p>
            )}
        </div>
    );
}

export default HeroSection;