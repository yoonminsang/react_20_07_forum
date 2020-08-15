import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/InfoHead.css";
import axios from "axios";

const InfoHead = () => {
  return (
    <>
      <div className="headbox">
        <div className="dchead">
          <Link to="/" className="dcmain_go">
            M's forum 메인가기<em className="sp_img icon_dcmain_go"></em>
          </Link>
          <div className="area_links">
            <ul>
              <li>
                <Link to="/forum">포럼</Link>
              </li>
              <li>
                <Link to="/info">갤로그</Link>
              </li>
              <li>
                <Link to="/popular">인기글</Link>
              </li>
              <li>
                <Link to="/notice">공지글</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoHead;
