import React, { useRef } from "react";
import { useLazyLoad } from "../../hooks/useLazyLoad";

import classes from "./Card.module.css";

const Card = ({ src, title, content }) => {
  const ref = useRef(null);
  const [isVisible] = useLazyLoad(ref, { root: null, threshold: 0.1 });

  return (
    <div
      className={`${classes.card} ${isVisible ? "visible" : "hidden"}`}
      ref={ref}
    >
      <img src={src} className={classes.card__img} alt={title}></img>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
