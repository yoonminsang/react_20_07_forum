import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import "./stylesheets/BoardPostMenu.css";
import axios from "axios";

const BoardPostMenu = ({ state }) => {
  const params = useParams();
  const postId = params.postId;
  const category = params.category;
  const history = useHistory();
  const modifyPost = () => {
    history.push(`/forum/${params.category}/modify/${params.postId}`);
  };
  const deletePost = () => {
    axios({
      method: "post",
      url: `/forum/${category}/delete_process`,
      data: {
        postId: postId,
      },
    })
      .then(function (res) {
        if (res.data === false) {
          alert("자격이 없습니다. 로그인을 확인해주세요");
        } else {
          alert("글이 삭제되었습니다.");
          history.push(`/forum/${category}`);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
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
              <button
                type="button"
                className="btn_grey modify"
                onClick={modifyPost}
              >
                수정
              </button>
              <button
                type="button"
                className="btn_grey cancle"
                onClick={deletePost}
              >
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
