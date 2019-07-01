import React from 'react'

export const UserContext = React.createContext({
    users: [],
    selectedUser: {id: 0},
    addUser: user => {},
    selectUser: userId => {},
    removeUser: user => {},
})

export default UserContext