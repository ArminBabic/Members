import React from "react";
import ReactDOM from "react-dom";
import style from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props) => {
    return (
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
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          info={props.info}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default ErrorModal;
