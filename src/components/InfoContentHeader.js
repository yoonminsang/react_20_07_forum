import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/InfoContentHeader.css";
import axios from "axios";

const InfoContentHeader = ({ title, count, url }) => {
  return (
    <>
      <header>
        <div className="cont_head clear">
          <h2 className="tit">
            {title}
            <span className="num">({count})</span>
          </h2>
          <Link to={url} className="btn_blue smallest go">
            전체보기
          </Link>
        </div>
      </header>
    </>
  );
};
export default InfoContentHeader;
