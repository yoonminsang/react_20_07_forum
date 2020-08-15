import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/InfoTypeContentHeader.css";
import axios from "axios";

const InfoTypeContentHeader = ({ count }) => {
  const params = useParams();
  const type = params.type;
  let title;
  if (type === "posting") {
    title = "전체 글";
  } else if (type === "comment") {
    title = "전체 댓글";
  }
  return (
    <>
      <header>
        <div className="cont_head clear">
          <h2 className="tit">
            {title}
            <span className="num">({count})</span>
          </h2>
        </div>
      </header>
    </>
  );
};
export default InfoTypeContentHeader;
