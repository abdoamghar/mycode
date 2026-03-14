import { createContext } from 'react';
import { useState, useRef } from 'react';
import Card from './card';

export const HomeContext = createContext({});

export default function Home() {


  const [darkMode, setDarkMode] = useState(false);
  const background = useRef(null);

  const handleDarkMode = () => {
    if (darkMode) {
     setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }
  return (
    <HomeContext.Provider value={darkMode}>
      <div ref={background}>
        <button className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} mt-3`} onClick={handleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        <Card username="Home Page 1" email="home1@example.com" />
        <Card username="Home Page 2" email="home2@example.com" />
        <Card username="Home Page 3" email="home3@example.com"/>
      </div>
    </HomeContext.Provider>
  )
}