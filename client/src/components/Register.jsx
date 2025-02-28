import React from 'react';
import "../styles/register.css";
import { NavLink } from 'react-router-dom';


export const Register = () => {
  return (
    <>
      <div className="container-fluid register">
        <div className="row p-5 formBox m-5">
          <div className="col-md-3 d-flex flex-column gap-5 justify-content-center align-items-center">
            <p>
              Welcome to Acoustic Talk
            </p>
            <NavLink to="/login" className="navLink">Login</NavLink>
          </div>
          <div className="col-md-9 my-md-0 my-5 py-md-0 py-5 d-flex justify-content-center align-items-center" style={{backgroundColor : "rgb(28, 28, 28)", borderTopLeftRadius : "2rem", borderBottomRightRadius : "2rem"}}>
            <form>
              <div className="row d-flex justify-content-center align-items-center gap-5 px-md-0 px-4" style={{}}>
                <div className="col-md-5">
                  <input type="text" className='form-control' placeholder='Your first name' required />
                </div>
                <div className="col-md-5">
                  <input type="text" className='form-control' placeholder='Your last name' />
                </div>
                <div className="col-md-5">
                  <input type="email" className='form-control' placeholder='Your email' required />
                </div>
                <div className="col-md-5">
                  <input type="number" className='form-control' placeholder='Your phone number' required />
                </div>
                <div className="col-md-5">
                  <input type="password" className='form-control' placeholder='Your password' required />
                </div>
                <div className="col-md-5">
                  <button type="submit"> Register </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
