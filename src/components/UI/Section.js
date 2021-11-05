import { React, useRef } from "react";
import { useLazyLoad } from "../../hooks/useLazyLoad";

import classes from "./Section.module.css";

const Section = (props) => {
  const ref = useRef();
  const [isVisible] = useLazyLoad(ref, { root: null, threshold: 0.3 });

  return (
    <section className={classes.section} ref={ref}>
      {isVisible ? props.children : null}
    </section>
  );
};

export default Section;
