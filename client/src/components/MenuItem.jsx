import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoColorPaletteSharp } from "react-icons/io5";


const colors = [
  "rgba(47, 229, 47, 0.719)", 
  "rgba(47, 102, 229, 0.719)",
  "rgba(165, 47, 229, 0.719)",
  "rgba(229, 47, 111, 0.719)",
  "rgba(208, 229, 47, 0.719)",
  "rgba(47, 229, 47, 0.719)"
];

export const MenuItem = () => {
  
  const [colorIndex, setColorIndex] = useState(0);
  const handleChangeTheme = () => { 
    document.documentElement.style.setProperty(`--color`, colors[colorIndex + 1]);
    if(colorIndex + 1 === 5) setColorIndex(0);
    else setColorIndex(colorIndex + 1);
  };

  return (
    <>
      <li> <NavLink to="/" className="navLink"> Home </NavLink> </li>
      <li> <NavLink to="/login" className="navLink"> Login </NavLink> </li>
      <li> <NavLink to="/register" className="navLink"> Register </NavLink> </li>
      <li> <IoColorPaletteSharp className="themeBtn" onClick={handleChangeTheme} /> </li>
    </>
  );
};
