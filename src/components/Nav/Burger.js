import React from "react";
import { useStore } from "../../store/store";

import classes from "./Burger.module.css";

const Burger = () => {
  const [state, dispatch] = useStore();

  const onClickHandler = () => {
    state.navMenuOpen ? dispatch("CLOSE_NAV") : dispatch("OPEN_NAV");
  };

  return (
    <div className={classes.burger} onClick={onClickHandler}>
      <div className={state.navMenuOpen ? classes.toggletop : ""}></div>
      <div className={state.navMenuOpen ? classes.togglemiddle : ""}></div>
      <div className={state.navMenuOpen ? classes.togglebottom : ""}></div>
    </div>
  );
};

export default Burger;
