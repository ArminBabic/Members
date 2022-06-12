import React, { useState } from "react";
import style from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: `Error`, info: `Please enter valid name and age !` });
      return;
    }
    if (enteredAge < 1) {
      setError({ title: `Error`, info: `Please enter correct age!` });
      return;
    }
    props.onAddUserHandler(enteredName, enteredAge);

    setEnteredName("");
    setEnteredAge("");
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
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={enteredNameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={enteredAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUsers;
