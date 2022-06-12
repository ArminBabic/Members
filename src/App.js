import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const AddUserHandler = (username, userage) => {
    setUsers((prevUserList) => {
      return [
        ...prevUserList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };
  console.log(users);
  return (
    <div>
      <AddUsers onAddUserHandler={AddUserHandler} />
      <UsersList allUsers={users} />
    </div>
  );
}

export default App;
