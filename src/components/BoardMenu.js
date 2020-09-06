import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./stylesheets/BoardMenu.css";

// 이거 아직 안했어 나중에 해야돼
const BoardMenu = ({ changePost }) => {
  const params = useParams();
  const history = useHistory();
  return (
    <>
      <div className="list_array_option clear">
        <div className="array_tab left_box">
          <button
            type="button"
            className={params.modeType === undefined ? "on" : null}
            onClick={() => history.push(`/forum/${params.category}`)}
          >
            전체글
          </button>
          <button
            type="button"
            className={params.modeType === "recommend" ? "on" : null}
            onClick={() =>
              history.push(`/forum/${params.category}/mode/recommend`)
            }
          >
            개념글
          </button>
          <button
            type="button"
            className={params.modeType === "best" ? "on" : null}
            onClick={() => history.push(`/forum/${params.category}/mode/best`)}
          >
            베스트글
          </button>
        </div>
        <div className="right_box">
          <div className="output_array clear" style={{ display: "block" }}>
            <div className="switch_btnbox">
              <Link
                to={`/forum/${params.category}/write`}
                className="btn_write sp_img"
              >
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
