import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/BoardMenu.css";

// 이거 아직 안했어 나중에 해야돼
const BoardMenu = ({ changePost }) => {
  return (
    <>
      <div className="list_array_option clear">
        <div className="array_tab left_box">
          <button type="button" className="on" onClick={changePost("all")}>
            전체글
          </button>
          <button type="button">개념글</button>
          <button type="button">공지</button>
        </div>
        <div className="right_box">
          <div className="output_array clear" style={{ display: "block" }}>
            <div className="switch_btnbox">
              <Link to="/" className="btn_write sp_img">
                <span className="blind">글쓰기</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoardMenu;
