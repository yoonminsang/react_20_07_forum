import React from "react";
import "./stylesheets/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        DESIGN BY MINSANG <Link to="/manage">| 관리자</Link>
      </p>
    </footer>
  );
};
export default Footer;
