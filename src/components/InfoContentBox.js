import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/InfoContentBox.css";
import axios from "axios";

const InfoContentBox = ({ content }) => {
  return (
    <>
      <div className="cont_box">
        <ul className="cont_listbox">
          {content.map((cont, index) => (
            <li key={index}>
              <div className="cont box1">
                <a
                  href={`/forum/${cont.category_id}/page/1/${cont.post_id}`}
                  target="_blank"
                >
                  <strong>{cont.title}</strong>
                </a>
              </div>
              <div className="cont box2">
                <a
                  href={`/forum/${cont.category_id}/page/1/${cont.post_id}`}
                  target="_blank"
                >
                  {cont.content}
                </a>
              </div>
              <div className="cont box3">
                <span className="info">
                  <a
                    href={`/forum/${cont.category_id}`}
                    target="_blank"
                    className="gall_name"
                  >
                    {cont.name}
                  </a>
                  <span className="date">{cont.created}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default InfoContentBox;
