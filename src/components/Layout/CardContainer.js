import React from "react";

import classes from "./CardContainer.module.css";
import img from "../../assets/img/MEMO_webphoto.jpg";
import Card from "../UI/Card";

const CardContainer = () => {
  return (
    <div className={classes.container}>
      <Card
        src={img}
        title="Christmas Version"
        content="dsfgd sdf dfgdfg dfgfg fdg"
      />
      <Card
        src={img}
        title="Christmas Version"
        content="dsfgd sdf dfgdfg dfgfg fdg"
      />
      <Card
        src={img}
        title="Christmas Version"
        content="dsfgd sdf dfgdfg dfgfg fdg"
      />
      <Card
        src={img}
        title="Christmas Version"
        content="dsfgd sdf dfgdfg dfgfg fdg"
      />
      <Card
        src={img}
        title="Christmas Version"
        content="dsfgd sdf dfgdfg dfgfg fdg"
      />
    </div>
  );
};

export default CardContainer;
