import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
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
          <Link to="/home" >Home</Link>
        </li>
        <li onClick={() => handleClick(1)} className={activeIndex === 1 ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => handleClick(2)} className={activeIndex === 2 ? 'active' : ''}>
          <Link to="/projects">Projects</Link>
        </li>
        <li onClick={() => handleClick(3)} className={activeIndex === 3 ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="background"></div>
    </nav>
  );
};

export default Navigation;