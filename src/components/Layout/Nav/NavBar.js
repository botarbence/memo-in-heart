import React, { useEffect, useState, useRef } from "react";

import { useStore } from "../../../store/store";

import Burger from "./Burger";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import Auth from "./Auth";
import LanguageSelector from "./LanguageSelector";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const ref = useRef();
  const [offset, setOffset] = useState();
  const [state, dispatch] = useStore();

  useEffect(() => {
    setOffset(ref.current.offsetTop);
  }, [setOffset]);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= offset) {
        dispatch("STICK_NAV");
      } else {
        dispatch("UNSTICK_NAV");
      }
    };
  }, [dispatch, offset]);

  return (
    <nav
      className={`${classes.navbar} ${state.navBarStick ? classes.sticky : ""}`}
      ref={ref}
    >
      <Burger />
      <NavLogo />
      <NavMenu />
      <Auth />
      <LanguageSelector />
    </nav>
  );
};

export default NavBar;
