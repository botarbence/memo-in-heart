import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

import { useStore } from "../../store/store";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  const [{ language }] = useStore();

  return (
    <div className={`${classes.modal} ${props.isActive ? classes.active : ""}`}>
      <div className={classes.content}>{props.children}</div>
      <button className={classes.btn} onClick={props.onClose}>
        {language.closeBtn}
      </button>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const closeModalHandler = () => {
    setIsActive(false);
    setTimeout(() => {
      props.onClose();
    }, 500);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={closeModalHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay isActive={isActive} onClose={closeModalHandler}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
