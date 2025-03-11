import React, { useState } from 'react';

export const Users = (props) => {
  const { users, activeUser, setActiveUser } = props;
  

  const navigateToUserChat = (user) => {
    console.log("User =", user);
    setActiveUser(user._id); 
  };

  let currUserId = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <>
      <div className="col-md-2 d-none d-lg-flex flex-column users p-4">
        {users.length === 0 ? (
          <h1>No User Found</h1>
        ) : (
          users.map((user) => (
            <p
              key={user._id}
              onClick={() => navigateToUserChat(user)}
              className={`${user._id === currUserId ? "loggedInUser" : ""} ${user._id === activeUser ? "activeUser" : ""}`}
            >
              {user.firstName}
            </p>
          ))
        )}
      </div>
    </>
  );
};
