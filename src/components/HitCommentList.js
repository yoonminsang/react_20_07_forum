import React, { useState } from "react";
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
  const [selected, setSelected] = useState(null);
  const [userPost, setUserPost] = useState(null);
  const [userComment, setUserComment] = useState(null);
  const selecting = (email, id) => () => {
    if (id === selected) {
      setSelected(null);
    } else {
      axios
        .get(`/forum//info/${email}`)
        .then(function (res) {
          setUserPost(res.data.post);
          setUserComment(res.data.comment);
          setSelected(id);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
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
                      <span
                        className="nickname"
                        onClick={selecting(comment.email, comment.id)}
                      >
                        <em>{comment.displayName}</em>
                      </span>
                      {selected === comment.id && (
                        <div className="user_data">
                          <ul className="user_data_list">
                            <li>
                              <Link to={`/info/${comment.email}/posting`}>
                                글
                                <em className="num font_lightred">
                                  {userPost}
                                </em>
                              </Link>
                            </li>
                            <li>
                              <Link to={`/info/${comment.email}/comment`}>
                                댓글
                                <em className="num font_lightred">
                                  {userComment}
                                </em>
                              </Link>
                            </li>
                            <li className="bg_grey">
                              <Link
                                to={`/forum/${params.category}/search/displayName/Keyword/${comment.displayName}`}
                              >
                                작성글 검색
                                <em className="sp_img icon_go"></em>
                              </Link>
                            </li>
                            <li className="bg_grey">
                              <Link to={`/info/${comment.email}`}>
                                갤로그 가기
                                <em className="sp_img icon_go"></em>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
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
