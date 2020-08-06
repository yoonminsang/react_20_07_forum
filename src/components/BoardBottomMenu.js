import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/BoardBottomMenu.css";

// 이거 아직 안했어 나중에 해야돼
const BoardBottomMenu = ({}) => {
  // 밑에 전체글 개념글은 누른거에 따라서(아마도 match.params로) 클래스 변경 --삼항)
  return (
    <>
      <div className="list_bottom_btnbox">
        <div className="fl">
          <button type="button" className="list_bottom btn_blue">
            전체글
          </button>
          <button type="button" className="list_bottom btn_white">
            개념글
          </button>
        </div>
        <div className="fr">
          <button type="button" className="btn_blue write">
            글쓰기
          </button>
        </div>
      </div>
    </>
  );
};
export default BoardBottomMenu;
