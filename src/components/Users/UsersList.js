import React from "react";
import style from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  console.log(props.allUsers);
  return (
    <Card className={style.users}>
      <ul>
        {props.allUsers.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
