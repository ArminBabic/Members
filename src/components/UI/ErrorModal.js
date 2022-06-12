import React from "react";
import style from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
const ErrorModal = (props) => {
  return (
    <>
      <div className={style.backdrop} onClick={props.onConfirm} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={style.content}>
          <p>{props.info}</p>
        </div>

        <footer className={style.actions}>
          <Button click={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModal;
