import React from "react";
import { NavLink } from "react-router-dom";
import { useStore } from "../../store/store";

import classes from "./NavItem.module.css";

const NavItem = ({ title }) => {
  const [{ language }, dispatch] = useStore();

  const onClickHandler = () => {
    dispatch("CLOSE_NAV");
  };

  return (
    <NavLink
      to={`/${title}`}
      className={classes.navitem}
      onClick={onClickHandler}
      activeClassName={classes.active}
    >
      {language[title]}
    </NavLink>
  );
};

export default NavItem;
