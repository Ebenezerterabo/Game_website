import { useState, useEffect } from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  
    useEffect(() => {
      document.body.className = theme;
      localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

  return(
    <div className={theme}>
      <Header toggleTheme={toggleTheme} theme={theme}/>
      <MainContent theme={theme}/>
      <Footer theme={theme}/>
    </div>
  )
}

export default App