import React, { useState, useRef } from "react";
import style from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const [error, setError] = useState("");

  const refName = useRef("");
  const refAge = useRef("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userName = refName.current.value;
    const userAge = refAge.current.value;
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({ title: `Error`, info: `Please enter valid name and age !` });
      return;
    }
    if (userAge < 1) {
      setError({ title: `Error`, info: `Please enter correct age!` });
      return;
    }
    props.onAddUserHandler(userName, userAge);
    refName.current.value = "";
    refAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          info={error.info}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={refName} />

          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={refAge} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUsers;
