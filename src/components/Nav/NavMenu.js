import React from "react";
import NavItem from "./NavItem";

import classes from "./NavMenu.module.css";

const Navmenu = () => {
  return (
    <ul className={classes.navmenu}>
      <NavItem title="home" />
      <NavItem title="about" />
      <NavItem title="products" />
      <NavItem title="contact" />
    </ul>
  );
};

export default Navmenu;
