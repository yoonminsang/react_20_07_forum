import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardComment.css";

const BoardCommentList = () => {
  return (
    <>
      <div className="comment_wrap show">
        <div className="comment_count">
          <div className="fl num_box">
            전체 리플 <em className="font_red">1</em>개
          </div>
        </div>
        <div className="comment_box">
          <ul className="cmt_list">
            <li className="ub-content">
              <div className="cmt_info clear">
                <div className="cmt_nickbox">
                  <span className="gall_writer ub-writer">
                    <span className="nickname">
                      <em>글쓴이</em>
                    </span>
                  </span>
                </div>
                <div className="clear cmt_txtbox btn_reply_write_all">
                  <p className="usertxt ub-word">내용</p>
                </div>
                <div className="fr clear">
                  <span className="date_time">08.05 17:24:20</span>
                  <div className="cmt_mdf_del">
                    <button type="button" className="btn_cmt_delete">
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="bottom_paging_box">
            <div className="cmt_paging">
              <em>1</em>
              <Link to="/">2</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoardCommentList;
