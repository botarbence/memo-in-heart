import React from "react";

import classes from "./NavMenu.module.css";
import { useStore } from "../../../store/store";
import { NavLink } from "react-router-dom";

const Navmenu = (props) => {
  const [{ navMenuOpen, language }, dispatch] = useStore();

  const onClickHandler = () => {
    dispatch("CLOSE_NAV");
  };

  return (
    <ul
      className={`${classes.navmenu} ${
        navMenuOpen ? classes["navmenu--open"] : ""
      }`}
    >
      {props.links.map((link) => {
        return (
          <NavLink
            key={link}
            to={`/${link}`}
            className={({ isActive }) =>
              `${classes.navitem} ${isActive ? classes.active : ""} ${
                navMenuOpen ? classes["navitem--open"] : ""
              }`
            }
            onClick={onClickHandler}
          >
            {language[link]}
          </NavLink>
        );
      })}
    </ul>
  );
};

export default Navmenu;
