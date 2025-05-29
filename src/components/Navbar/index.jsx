import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import './styles.scss'

const data = [
  {
    label: 'INICIO',
    to: '/',
  },
  {
    label: 'YO',
    to: '/about',
  },
  {
    label: 'HABILIDADES',
    to: '/skills',
  },
  {
    label: 'RESUMEN',
    to: '/resume',
  },
  {
    label: 'PORTAFOLIO',
    to: '/portfolio',
  },
  {
    label: 'CONTACTO',
    to: '/contact',
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={'/'} className="navbar_container_logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className= {`navbar_container_menu ${toggleIcon ? 'active':''}`}>
          {data.map((item) => (
            <li key={item.label} className="navbar_container_menu_item"> {/* Use item.label as the key */}
              <Link className="navbar_container_menu_item_links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav_icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;