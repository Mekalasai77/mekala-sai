import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navRef = useRef(null);
  
    const handleClick = (index) => {
      setActiveIndex(index);
    };
  
    useEffect(() => {
      const navItems = navRef.current.querySelectorAll('li');
      const activeItem = navItems[activeIndex];
  
      if (activeItem) {
        const left = activeItem.offsetLeft;
        const width = activeItem.offsetWidth;
  
        navRef.current.style.setProperty('--left', `${left}px`);
        navRef.current.style.setProperty('--width', `${width}px`);
      }
    }, [activeIndex]);
  
    return (
      <nav ref={navRef} className="navbar">
        <ul className="navbar-links">
          <li onClick={() => handleClick(0)} className={activeIndex === 0 ? 'active' : ''}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => handleClick(1)} className={activeIndex === 1 ? 'active' : ''}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => handleClick(2)} className={activeIndex === 2 ? 'active' : ''}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => handleClick(3)} className={activeIndex === 3 ? 'active' : ''}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="background"></div>
      </nav>
    );
  };

export default Navigation;