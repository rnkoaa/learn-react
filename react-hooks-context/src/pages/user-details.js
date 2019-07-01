import React, { useContext, useEffect } from "react";
import UserContext from '../context/users-context';;

const UserDetails = () => {
  //get the selected user from the usersContext
  const usersContext = useContext(UserContext);
  const {selectedUser} = usersContext

  return (
    <div>
      {/* {usersContext.selectedUser && usersContext.selectedUser.name ? (
        <>
          <p>You made a selection</p>
        </>
      ) : (
        <p>Please select a user in the list to see the details.</p>
      )} */}
      <h4>User Details: </h4>
      {selectedUser && selectedUser.name ? (
        <>
          <p>
            Selected User name: <strong>{selectedUser.name}</strong>
          </p>
          <p>
            Selected User id: <strong>{selectedUser.id}</strong>
          </p>
        </>
      ) : (
        <p>Please select a user in the list to see the details.</p>
      )}
    </div>
  );
};

export default UserDetails;
