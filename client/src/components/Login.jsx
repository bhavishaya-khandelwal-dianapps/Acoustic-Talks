import React, { useState } from 'react';
import { Welcome } from './Welcome';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Login = () => {

  const navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({
    email : "", 
    password : ""
  });

  const handleChange = (event) => {
    setCredentials((prev) => ({...prev, [event.target.name] : event.target.value}));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/v1/user/login", {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(credentials)
      });

      const data = await response.json();

      if(!response.ok) {
        toast.error(data.data);
      }
      if(data.status === true) {
        toast.success("User logged-in successfully");

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
    catch(error) {
      toast.error(`Error: ${error.message}`);
    }

  }


  return (
    <>
      <div className="container-fluid register">
        <div className="row p-5 formBox m-5">
          <Welcome link="register" />
          <div className="col-md-9 my-md-0 my-5 py-md-0 py-5 d-flex justify-content-center align-items-center" style={{backgroundColor : "rgb(28, 28, 28)", borderTopLeftRadius : "2rem", borderBottomRightRadius : "2rem"}}>
            <form onSubmit={handleSubmit}>
              <div className="row d-flex gap-5">
                <div className="col-12">
                  <input type="email" className='form-control' name="email" value={credentials.email} placeholder='Your email' required onChange={handleChange} />
                </div>
                <div className="col-12">
                  <input type="password" className='form-control' name="password" value={credentials.password} placeholder='Your password' required onChange={handleChange} />
                </div>
                <div className="col-12">
                  <button type="submit"> Login </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
