import { React, useRef } from "react";
import { useLazyLoad } from "../../hooks/useLazyLoad";

import classes from "./Typo.module.css";

const Typo = (props) => {
  const ref = useRef(null);
  const [isVisible] = useLazyLoad(ref, { root: null, threshold: 0.3 });

  const classNames = (type, isVisible) =>
    `${classes[type]} ${isVisible ? "visible" : "hidden"}`;

  if (props.type === "h2")
    return (
      <h2 ref={ref} className={classNames(props.type, isVisible)}>
        {props.text}
      </h2>
    );
  if (props.type === "h3")
    return (
      <h3 ref={ref} className={classNames(props.type, isVisible)}>
        {props.text}
      </h3>
    );
  if (props.type === "p")
    return (
      <p ref={ref} className={classNames(props.type, isVisible)}>
        {props.text}
      </p>
    );
};

export default Typo;
