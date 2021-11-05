import { React, useRef } from "react";
import { Link } from "react-router-dom";

import { useLazyLoad } from "../../hooks/useLazyLoad";
import classes from "./Button.module.css";

const Button = (props) => {
  const ref = useRef(null);
  const [isVisible] = useLazyLoad(ref, { root: null, threshold: 0.3 });

  return (
    <Link
      ref={ref}
      to={props.to}
      className={`${classes[props.className]} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      {props.text}{" "}
    </Link>
  );
};

export default Button;
