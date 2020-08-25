import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardPost.css";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
const HitPost = ({ post, goodbadRefresh }) => {
  const params = useParams();
  const postId = params.postId;
  const good = () => {
    axios({
      method: "post",
      url: "/hit/good/process",
      data: {
        postId,
      },
    })
      .then(function (res) {
        if (res.data) {
          alert(res.data);
          goodbadRefresh();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const bad = () => {
    axios({
      method: "post",
      url: "/hit/bad/process",
      data: {
        postId,
      },
    })
      .then(function (res) {
        if (res.data) {
          alert(res.data);
          goodbadRefresh();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(() => {}, []);
  return (
    <>
      <h2 className="blind">갤러리 본문 영역</h2>
      <div className="view_content_wrap">
        <header>
          <div className="gallview_head clear ub-content">
            <h3 className="title ub-word">
              <span className="title_headtext"></span>
              <span className="title_subject">{post.title}</span>
            </h3>
            <div className="gall_writer ub-writer">
              <div className="fl">
                <span className="nickname in">
                  <em>{post.displayName}</em>
                </span>
                {/* <a className="writer_nikcon">
                  <img
                    src="https://nstatic.dcinside.com/dc/w/images/nik.gif"
                    width="12"
                    height="11"
                  ></img>
                </a> */}

                <span className="gall_date" title={post.created}>
                  {post.created}
                </span>
              </div>
              <div className="fr">
                <span className="gall_count">조회 {post.count}</span>
                <span className="gall_reply_num">추천 {post.good}</span>
                <span className="gall_comment">댓글 {post.comment}</span>
              </div>
            </div>
          </div>
        </header>
        <div className="gallview_contents">
          <div className="inner clear">
            <div className="ql-container ql-snow">
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>
            </div>
          </div>
          <div className="btn_recommend_box clear">
            <h3 className="blind">추천 비추천</h3>
            <div className="inner fl">
              <div className="up_num_box">
                <p className="up_num font_red">{post.good}</p>
              </div>
              <button type="button" className="btn_recom_up" onClick={good}>
                <span className="blind">개념 추천</span>
                <em className="sp_img icon_recom_up"></em>
              </button>
            </div>
            <div className="inner fr">
              <button type="button" className="btn_recom_down" onClick={bad}>
                <span className="blind">개념 비추천</span>
                <em className="sp_img icon_recom_down"></em>
              </button>
              <div className="down_num_box">
                <p className="down_num">{post.bad}</p>
              </div>
            </div>
            <div className="recom_bottom_box clear">
              <button
                type="button"
                className="btn_snsmore"
                onClick={() => (
                  navigator.clipboard.writeText(window.location.href),
                  alert("현재 url이 복사되었습니다.")
                )}
                style={{ width: "100%" }}
              >
                <em className="sp_img icon_snsmore"></em>공유
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HitPost;
