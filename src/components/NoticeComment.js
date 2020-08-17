import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./stylesheets/BoardComment.css";

const BoardComment = ({ user_id, commentRefresh }) => {
  const params = useParams();
  const postId = params.postId;
  const [comment, setComment] = useState("");
  const register = (e) => {
    e.preventDefault();
    if (user_id === null) {
      alert("로그인이 필요합니다.");
      return;
    }
    if (comment === "") {
      alert("댓글을 입력하세요");
      return;
    }
    axios({
      method: "post",
      url: "/notice/comment/create_process",
      data: {
        user_id,
        comment,
        postId,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          setComment("");
          commentRefresh();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <>
      <div className="cmt_write_box clear">
        <div className="cmt_txt_cont">
          <div className="cmt_write">
            <textarea
              maxLength="400"
              placeholder="내용을 입력하세요"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <div className="cmt_cont_bottm clear">
            <div className="fr">
              <button
                type="button"
                className="btn_blue btn_svc small repley_add"
                onClick={register}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoardComment;
