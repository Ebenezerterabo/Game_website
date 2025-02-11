
function Header({toggleTheme, theme}) {
    return (
        <header className="header">
            <div className="logo">
                <img src="src/assets/game_logo.png" alt="game logo" />
            </div>
            <div className={`search-bar ${theme}`}>
                <input type="text" placeholder="Search 305,678 games" />
            </div>
            <div className={`login-btn ${theme}`}>
                <button>Login</button>
            </div>
            <div className={`toggle-container ${theme}`} >
                <input type="checkbox" id="theme-toggle" onChange={toggleTheme}/>
                <label htmlFor="theme-toggle" className={`toggle-label ${theme}`}>
                    <span className="toggle-circle"></span>
                </label>
            </div>
        </header>
    );
}

export default Header;