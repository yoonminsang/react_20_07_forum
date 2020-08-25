import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardComment.css";
import axios from "axios";

const HitCommentList = ({ commentList, user_id, commentRefresh }) => {
  const params = useParams();
  const post_id = params.postId;
  const comment_delete = (id) => () => {
    axios({
      method: "post",
      url: "/hit/comment/delete_process",
      data: {
        id,
        post_id,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          commentRefresh();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <div className="comment_wrap show">
        <div className="comment_count">
          <div className="fl num_box">
            전체 리플 <em className="font_red">{commentList.length}</em>개
          </div>
        </div>
        <div className="comment_box">
          <ul className="cmt_list">
            {commentList.map((comment) => (
              <li className="ub-content" key={comment.id}>
                <div className="cmt_info clear">
                  <div className="cmt_nickbox">
                    <span className="gall_writer ub-writer">
                      <span className="nickname">
                        <em>{comment.displayName}</em>
                      </span>
                    </span>
                  </div>
                  <div className="clear cmt_txtbox btn_reply_write_all">
                    <p className="usertxt ub-word">{comment.content}</p>
                  </div>
                  <div className="fr clear">
                    <span className="date_time">{comment.created}</span>
                    <div className="cmt_mdf_del">
                      {user_id === comment.user_id && (
                        <button
                          type="button"
                          className="btn_cmt_delete"
                          onClick={comment_delete(comment.id)}
                        >
                          삭제
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* 이거 또 언제하지... 시간남으면하자
           <div className="bottom_paging_box">
            <div className="cmt_paging">
              <em>1</em>
              <Link to="/">2</Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default HitCommentList;
