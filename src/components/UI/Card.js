import React, { useRef } from "react";
import { useLazyLoad } from "../../hooks/useLazyLoad";

import classes from "./Card.module.css";

import { useStore } from "../../store/store";

const Card = ({ src, title, content }) => {
  const [dispatch] = useStore();

  const ref = useRef(null);
  const [isVisible] = useLazyLoad(ref, { root: null, threshold: 0.1 });

  const openModalHandler = () => {
    dispatch("OPEN_MODAL");
  };
  return (
    <div
      className={`${classes.card} ${isVisible ? "visible" : "hidden"}`}
      ref={ref}
    >
      <img src={src} className={classes.img} alt={title}></img>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <button onClick={openModalHandler}>MORE</button>
    </div>
  );
};

export default Card;
