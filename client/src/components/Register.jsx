import React, { useReducer } from "react";
import "../styles/register.css";
import { Welcome } from "./Welcome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


export const Register = () => {

  const navigate = useNavigate();

  const initialState = {
    firstName : "", 
    lastName : "", 
    email : "", 
    phoneNumber : "",
    password : ""
  };

  const handleChange = (event) => {
    dispatch({
      type : "UPDATE_FIELD", 
      field : event.target.name, 
      value : event.target.value
    });
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case "UPDATE_FIELD" : 
        return {
          ...state, 
          [action.field] : action.value
        };
      
      default : 
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await fetch("http://localhost:5000/api/v1/user/register", {
        method : "POST", 
        headers : {
          "Content-Type" : "application/json" 
        },
        body : JSON.stringify(state) 
      });

      const data = await response.json();
      if(!response.ok) {
        toast.error(`${data.data}`);
        return;
      }
      if(data.status === true) {
        toast.success("Registration successful! 🎉"); 

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
    catch(error) {
      toast.error(`Error: ${error.message}`);
    }
  }


  return (
    <div className="container-fluid register">
      <div className="row p-5 formBox m-5">
        <Welcome link="login" />
        <div
          className="col-md-9 my-md-0 my-5 py-md-0 py-5 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgb(28, 28, 28)", borderTopLeftRadius: "2rem", borderBottomRightRadius: "2rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center align-items-center gap-5 px-md-0 px-3">
              <div className="col-md-5">
                <input type="text" className="form-control" name="firstName" placeholder="Your first name" required value={state.firstName} onChange={handleChange} />
              </div>
              <div className="col-md-5">
                <input type="text" className="form-control" name="lastName" placeholder="Your last name" value={state.lastName} onChange={handleChange} />
              </div>
              <div className="col-md-5">
                <input type="email" className="form-control" name="email" placeholder="Your email" required value={state.email} onChange={handleChange} />
              </div>
              <div className="col-md-5">
                <input type="number" className="form-control" name="phoneNumber" placeholder="Your phone number" required value={state.phoneNumber} onChange={handleChange} />
              </div>
              <div className="col-md-5">
                <input type="password" className="form-control" name="password" placeholder="Your password" required value={state.password} onChange={handleChange} />
              </div>
              <div className="col-md-5">
                <button type="submit">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
