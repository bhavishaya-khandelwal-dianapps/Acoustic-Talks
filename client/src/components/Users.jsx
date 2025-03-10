import React, { useEffect, useState } from 'react'

export const Users = (props) => {

  const { users } = props;

  return (
    <>
      <div className="col-md-2 d-none d-lg-flex flex-column users p-4">
        {
          users.length === 0 ? 
          <h1>No User Found</h1> : 
          users.map((user) => {
            return (
              <p key={user._id}>
                { user.firstName }
              </p>
            );
          })
        }
      </div>
    </>
  );
}
