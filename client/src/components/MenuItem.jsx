import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoColorPaletteSharp } from "react-icons/io5";


const colors = [
  "rgb(214, 154, 222)", 
  "rgb(106, 156, 137)",
  "rgb(255, 180, 162)",
  "rgb(80, 141, 78)",
  "rgb(252, 248, 243)",
  "rgb(188, 163, 127)"
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
      <li> <NavLink to="/room" className="navLink"> Rooms </NavLink> </li>
      <li> <NavLink to="/login" className="navLink"> Login </NavLink> </li>
      <li> <NavLink to="/register" className="navLink"> Register </NavLink> </li>
      <li> <IoColorPaletteSharp className="themeBtn" onClick={handleChangeTheme} /> </li>
    </>
  );
};
