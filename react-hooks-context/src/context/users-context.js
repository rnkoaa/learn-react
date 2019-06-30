import React, { useState } from 'react'
import PropTypes from "prop-types";


export const UserContext = React.createContext({
    users: [],
    selectedUser: {},
    addUser: user => {},
    removeUser: user => {},
})

// export const Provider = props => {
//     const {
//         users: initialUsers,
//         selectedUser: initialSelectedUsers,
//         children
//     } = props

//     const [users, setUsers] = useState(initialUsers)
//     const [selectedUser, setSelectedUser] = useState(initialSelectedUsers);

//     const addNewUser = userName => {
//         const newUser = { id: new Date().getTime().toString(), name: userName };
//         setUsers(users.concat([newUser]));
//     };

//     // Make the context object:
//     const usersContext = {
//         users,
//         setUsers,
//         selectedUser,
//         setSelectedUser,
//         addNewUser
//     };

//     return (
//         // pass the value in provider and return
//         <Context.Provider value={usersContext}>
//             {children}
//         </Context.Provider>
//     )
// }


// export const { Consumer } = Context;

// Provider.propTypes = {
//   users: PropTypes.array,
//   selectedUser: PropTypes.object
// };

// Provider.defaultProps = {
//   users: [],
//   selectedUser: {}
// };

export default UserContext