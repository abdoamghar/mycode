import React from 'react';
import luffyLogo from "../assets/luffy.png"
import zoroImg from '../assets/zoro.png';
import { motion, scale, useScroll } from 'framer-motion';

// --- 1. THE DATA ---
// We keep the content in an array so the UI code stays short and clean.
const characterData = [
  {
    id: 1,
    title: "Monkey D. Luffy",
    description: "Monkey D. Luffy is the captain of the Straw Hat Pirates, and dreamt of being a pirate since childhood from the influence of his idol and mentor Red-Haired Shanks. At the age of 17, Luffy sets sail from the East Blue Sea to the Grand Line in search of the legendary treasure, One Piece, to succeed Gol D. Roger as \"King of the Pirates\".",
    buttonText: "Coming soon",
    isHero: true
  },
  {
    id: 2,
    title: "Our Team",
    description: "The Straw Hat Pirates, also known as the Mugiwara Pirates, Straw Hat Crew or simply the Straw Hats, are a very infamous and powerful pirate crew that originated from the East Blue.",
    image: luffyLogo,
    isDark: true
  },
  {
    id: 3,
    title: "Roronoa Zoro",
    description: "Zoro originally used two swords instead of three. Zoro was originally planned to be part of Buggy the Clown's pirate crew and would have been recruited by Luffy away from Buggy. Zoro's surname was based on the Japanese pronunciation of French pirate François l'Olonnais.",
    image: zoroImg,
    isDark: true
  }
];

// --- 2. THE REUSABLE SECTION COMPONENT ---
const Section = ({ info }) => {
  // We use conditional classes to change the look based on the data
  const sectionClass = info.isHero ? "hero-section" : "card-section";
  const themeClass = info.isDark ? "dark-theme" : "light-theme";

  return (
    <div
     className={`section ${sectionClass} ${themeClass}`}>
      <motion.div 
    initial={{x: -300, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 1, ease: "easeOut"}}
      className="text-content">
        <motion.h1
          initial={{
            scale: 0.8,
            color: "black",
          }}
          animate={{
            scale: [1, 1.2, 1],
            color: "skyblue",
          }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
        >
          {info.title}
        </motion.h1>
        <motion.p>
          {info.description}
        </motion.p>
        {info.buttonText && <motion.button
        whileHover={{
            scale: 1.1,
            backgroundColor: "#007bff",
            color: "#fff",
        }}
        className="btn-outline">{info.buttonText}</motion.button>}
      </motion.div>
      
      {info.image && (
        <div className="image-container">
          <motion.img drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileInView={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1],
          }}
           src={info.image} alt={info.title} />
        </div>
      )}
    </div>
  );
};

// --- 3. THE MAIN PAGE ---
const OnePiecePage = () => {

  const { scrollYProgress } = useScroll();

  return (
    <div className="page-container">
      {/* Scroll progress bar at the top */}
      <motion.div style={{scaleX: scrollYProgress, border: "3px solid royalblue", position: "fixed", top: 0, left: 0, right: 0, height: "5px", transformOrigin: "0% 0%"}}
    
      ></motion.div>
      <nav className="navbar">
        <div className="image-container">
    {/* If it's a regular image link, use <img>. 
        If you want the DRAWING animation, paste the SVG code here: */}
    
  
  </div>
        <div className="links">
          <span>Luffy</span>
          <span>Our Team</span>
          <span>About us</span>
        </div>
      </nav>

      <main className="content">
        {characterData.map((item) => (
          <Section key={item.id} info={item} />
        ))}
      </main>
    </div>
  );
};

export default OnePiecePage;