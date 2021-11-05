import React from "react";
import { Link } from "react-router-dom";

import { useStore } from "../../store/store";
import classes from "./NavLogo.module.css";
import logo from "../../assets/img/MEMO_Logo_arany.svg";

const NavLogo = () => {
  const [state] = useStore();

  return (
    <Link
      to="/"
      className={`${classes.logo} ${state.navBarStick ? classes.visible : ""}`}
    >
      <img src={logo} alt="LOGO" />
    </Link>
  );
};

export default NavLogo;
