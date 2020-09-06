import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageHitItems = ({
  id,
  category_id,
  title,
  comment,
  hit,
  good,
  report,
  bad,
  created,
  checked,
  changeChildChecked,
  postDelete,
  name,
  displayName,
}) => {
  return (
    <>
      <li>
        <div className="check_blog">
          <input
            type="checkbox"
            className="inp_check"
            value={id}
            checked={checked}
            onChange={changeChildChecked}
          />
        </div>

        <div className="post_cont">
          <strong className="tit_post tit_eclip">
            <Link
              to={`/forum/${category_id}/page/1/${id}`}
              className="link_cont"
              target="_blank"
            >
              {title}
            </Link>
          </strong>
          <Link to={`/manage/post/category/${category_id}`}>
            <span className="txt_cate txt_ellip">{name}</span>
          </Link>
          <span className="txt_info fst">{displayName}</span>
          <span className="txt_info">{created}</span>
          <span className="txt_info">댓글 {comment}</span>
          <span className="txt_info">힛 {hit}</span>
          <span className="txt_info">추천 {good}</span>
          <span className="txt_info">신고 {report}</span>
          <span className="txt_info">비추천 {bad}</span>
        </div>
        <div className="post_btn">
          <div className="info_btn">
            <div>
              <button
                type="button"
                className="btn_post"
                style={{ padding: "0" }}
                onClick={() => postDelete(id, category_id)}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default ManageHitItems;
