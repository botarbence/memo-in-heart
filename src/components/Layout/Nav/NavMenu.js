import React from "react";
import NavItem from "./NavItem";

import classes from "./NavMenu.module.css";
import { useStore } from "../../../store/store";

const Navmenu = () => {
  const [{ navMenuOpen }] = useStore();
  return (
    <ul className={`${classes.navmenu} ${navMenuOpen ? classes.open : ""}`}>
      <NavItem title="home" />
      <NavItem title="about" />
      <NavItem title="products" />
      <NavItem title="contact" />
    </ul>
  );
};

export default Navmenu;
