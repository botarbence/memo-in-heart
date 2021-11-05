import React, { useState, useEffect } from "react";

import img from "../../assets/img/pexels-pixabay-210186.jpg";
import classes from "./SlideShow.module.css";

const SlideShow = () => {
  const [width, setWidth] = useState(-50);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (width > -58) setWidth((prevState) => prevState - 0.01);
    }, 10);
    return () => {
      clearTimeout(timer1);
    };
  }, [width]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.wrapper}
        style={{ transform: `translate(${width}%, -50%)` }}
      >
        <img src={img} alt="yeye" className={classes.img}></img>
      </div>
    </div>
  );
};

export default SlideShow;
