import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./stylesheets/BoardBottomMenu.css";

// 이거 아직 안했어 나중에 해야돼
const BoardBottomMenu = ({}) => {
  const params = useParams();
  const history = useHistory();
  return (
    <>
      <div className="list_bottom_btnbox">
        <div className="fl">
          <button
            type="button"
            className={
              params.modeType === undefined
                ? "list_bottom btn_blue"
                : "list_bottom btn_white"
            }
            onClick={() => history.push(`/forum/${params.category}`)}
          >
            전체글
          </button>
          <button
            type="button"
            className={
              params.modeType === "recommend"
                ? "list_bottom btn_blue"
                : "list_bottom btn_white"
            }
            onClick={() =>
              history.push(`/forum/${params.category}/mode/recommend`)
            }
          >
            개념글
          </button>
        </div>
        <div className="fr">
          <button
            type="button"
            className="btn_blue write"
            onClick={() => history.push(`/forum/${params.category}/write`)}
          >
            글쓰기
          </button>
        </div>
      </div>
    </>
  );
};
export default BoardBottomMenu;
