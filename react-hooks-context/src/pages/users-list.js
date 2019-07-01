import React, { useContext } from "react";
import clsx from "clsx";
import UserContext from '../context/users-context'

const UsersList = props => {
  const usersContext = useContext(UserContext);

  // const { users, selectedUser, setSelectedUser } = usersContext;

  return (
    <div>
      <h4>Users: </h4>
      {usersContext.users.map(user => {
        // compose class name
        const userItemClassNames = clsx("user-item", {
          "user-item-selected": user.id === usersContext.selectedUser.id
        });

        return (
          <div
            // className={userItemClassNames}
            key={user.id}
            // onClick={() => usersContext.selectUser.bind(this, user.id)}

            onClick={() => usersContext.selectUser(user.id)}
          >
            {user.name}
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
