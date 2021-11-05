import { React, useRef } from "react";
import { useLazyLoad } from "../../hooks/useLazyLoad";

import classes from "./Image.module.css";

const Image = (props) => {
  const ref = useRef(null);
  const [isVisible] = useLazyLoad(ref, { root: null, threshold: 0.3 });

  return (
    <img
      ref={ref}
      className={`${classes[props.className]} ${
        isVisible ? "visible" : "hidden"
      }`}
      src={props.src}
      alt={props.alt}
    ></img>
  );
};

export default Image;
