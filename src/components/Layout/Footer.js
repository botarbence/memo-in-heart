import React from "react";
import { Link } from "react-router-dom";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";

import classes from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <Link to="/frequently-asked-questions">FAQ</Link>
        <Link to="/delivery-and-returns">Delivery and Returns</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
      </div>
      <div className={classes.wrapper}>
        <div>
          <PhoneIcon />
          <a href="tel:123-456-789">123-456-789</a>
        </div>
        <div>
          <MailIcon />
          <a href="/">Support</a>
        </div>
        <div>
          <FacebookIcon />
          <a href="/">Facebook</a>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className={classes.copyright}>
        <div>
          <span>MEMO-in-HEART &copy;</span>
          <span className={classes.bold}>{date.getFullYear()}</span>
        </div>
        <div>
          <span>
            Design By<span className={classes.bold}>Nikolett Fábián</span>
            UI/UX By<span className={classes.bold}>Bence Botár</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
