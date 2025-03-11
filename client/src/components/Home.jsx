import React, { useEffect, useState } from 'react';
import { Users } from './Users';
import { ChatBox } from './ChatBox';
import "../styles/home.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { toast } from 'react-toastify';


export const Home = () => {
  
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [activeUser, setActiveUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/user/list", {
        method : "GET", 
        headers : {
          "Content-Type" : "application/json"
        },
        credentials : 'include'
      });

      const jsonData = await response.json();
      if(!response.ok) {
        toast.error(jsonData.data);
        return;
      }
      console.log("jsonData =", jsonData);
      setUsers(jsonData.data);
    }
    catch(error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleMessageSend = () => {
    console.log(message);

    //* Here I am going to write the code for adding message to the database  
    

    setMessage("");
  }

  const handleKeyDown = (event) => {
    if(event.key === "Enter") {
      event.preventDefault();
      handleMessageSend();
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-evenly m-2">
          <Users users={users} activeUser={activeUser} setActiveUser={setActiveUser} />
          <div className="col-md-10 col-12 chatBox">
            <ChatBox />
            <div className="inputBox">
              <input type="text" className='form-control' value={message} name="message" placeholder='Type a message...' onChange={(event) => {setMessage(event.target.value)}} onKeyDown={handleKeyDown} />
              <RiSendPlaneFill className='sendBtn' onClick={handleMessageSend}  />
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