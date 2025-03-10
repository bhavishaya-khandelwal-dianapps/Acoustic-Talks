import React, { useEffect, useState } from 'react';
import { Users } from './Users';
import { ChatBox } from './ChatBox';
import "../styles/home.css";
import { RiSendPlaneFill } from "react-icons/ri";


export const Home = () => {
  
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/user/list", {
        method : "GET", 
        headers : {
          "Content-Type" : "application/json"
        }
      });

      console.log("Response =", response);
      const data = await response.json();
      console.log("Data =", data);
    }
    catch(error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-evenly m-2">
          <Users users={users} />
          <div className="col-md-10 col-12 chatBox">
            <ChatBox />
            <div className="inputBox">
              <input type="text" className='form-control' placeholder='Type a message...' />
              <RiSendPlaneFill className='sendBtn' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


// Abstract - intro + conclusion (web socket + mongoDB)
// literature review - studies stack overflow + quora 
// tech comparison 
// experimental  - implementation + pages (tabs in detail) 
// conclusion 
// future scope  
// references 