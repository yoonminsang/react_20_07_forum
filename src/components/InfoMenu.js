import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/InfoMenu.css";
import axios from "axios";

const InfoMenu = () => {
  const params = useParams();
  const email = params.email;
  const type = params.type;
  return (
    <>
      <ul className="gallog_menu">
        <li className={type === undefined ? "home on" : "home"}>
          <Link to={`/info/${email}`}>갤로그 홈</Link>
        </li>
        <li className={type === "posting" ? "home on" : "home"}>
          <Link to={`/info/${email}/posting`}>내 게시글</Link>
        </li>
        <li className={type === "comment" ? "home on" : "home"}>
          <Link to={`/info/${email}/comment`}>내 댓글</Link>
        </li>
      </ul>
    </>
  );
};
export default InfoMenu;
