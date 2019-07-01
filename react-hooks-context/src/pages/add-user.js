import React, { useRef, useContext } from 'react';
import UserContext from '../context/users-context';

const AddUser = () => {
  const inputEl = useRef();
  const usersContext = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    const val = inputEl.current.value;
    console.log(val);
    inputEl.current.value = '';
    usersContext.addUser({name: val, id: new Date().getTime()})

  };

  return (
    <>
      <hr />
      <h3>Add new user:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputEl} placeholder="Enter name" />
        <button
        // className={clsx("add-btn", {
        //   disabled: !userName
        // })}
        // onClick={() => usersContext.addNewUser(userName)}
        // disabled={!userName}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddUser;
