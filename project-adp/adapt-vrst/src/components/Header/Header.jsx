import  { useState } from 'react';
import './Header.css';

export default function Header() {
  /* меню сворачивается и разворачивается при разной ширине экрана*/ 
  const [menuOpen, setMenuOpen] = useState(false); 

  const hamburgerMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <header>
      <img src="/IMAGE.svg" className="logo" alt="logo" />

     
      <div className="hamburger" onClick={hamburgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <nav className={menuOpen ? 'active' : ''}>
        <a href="ссылка">Home</a>
        <a href="ссылка">Episodes</a>
        <a href="ссылка">About</a>
        <a href="ссылка">Contact</a>
      </nav>
    </header>
  )
}