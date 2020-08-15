import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./stylesheets/BoardPostMenu.css";

const BoardPostMenu = ({ state }) => {
  const params = useParams();
  const history = useHistory();

  return (
    <>
      <div className="view_bottom_btnbox clear">
        <div className="fl">
          <button
            type="button"
            className={
              params.modeType === undefined
                ? "btn_blue concept"
                : "btn_white concept"
            }
            onClick={() => history.push(`/forum/${params.category}`)}
          >
            전체글
          </button>
          <button
            type="button"
            className={
              params.modeType === "recommend"
                ? "btn_blue concept"
                : "btn_white concept"
            }
            onClick={() =>
              history.push(`/forum/${params.category}/mode/recommend`)
            }
          >
            개념글
          </button>
        </div>
        <div className="fr">
          {state === true && (
            <>
              <button type="button" className="btn_grey modify">
                수정
              </button>
              <button type="button" className="btn_grey cancle">
                삭제
              </button>
            </>
          )}

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
export default BoardPostMenu;
