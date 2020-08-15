import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/InfoTopBar.css";
import axios from "axios";

const InfoTopBar = ({ displayName }) => {
  return (
    <>
      <div className="top_bar">
        <div className="bar clear">
          <div className="galler_info">
            <strong className="nick_name">{displayName}</strong> 님의
            갤로그입니다.
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoTopBar;
