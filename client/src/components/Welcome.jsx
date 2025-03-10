import React from "react";
import { NavLink } from 'react-router-dom';


export const Welcome = (props) => {
  return (
    <>
      <div className="col-md-3 d-flex flex-column gap-5 justify-content-center align-items-center">
        <p>Welcome to Acoustic Talk</p>
        <NavLink to={`/${props.link}`} className="navLink">
          { (props.link).toUpperCase() }
        </NavLink>
      </div>
    </>
  );
};
