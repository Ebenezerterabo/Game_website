function Sidebar({genres}) {
    const genresList = genres.map((genre) => {
        return (
            <div className="game-details" key={genre.id}>
                <img src={genre.image_background} alt={genre.slug} />
                <li key={genre.id}>{genre.name}</li>
            </div>
        );
    });

    return (
        <div className="side-bar">
            <h3>Genres</h3>
            {genresList}
        </div>

    );
}

export default Sidebar;