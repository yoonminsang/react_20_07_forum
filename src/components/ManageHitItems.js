import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageHitItems = ({
  id,
  title,
  comment,
  created,
  checked,
  changeChildChecked,
  // noticeDelete,
  // noticeChangeState,
  hitChangeState,
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
              to={`/notice/page/1/${id}`}
              className="link_cont"
              target="_blank"
            >
              {title}
            </Link>
          </strong>
          <span className="txt_info fst">매니저</span>
          <span className="txt_info">{created}</span>
          <span className="txt_info">댓글 {comment}</span>
        </div>
        <div className="post_btn">
          <div className="info_btn">
            <div>
              <button
                type="button"
                className="btn_post"
                style={{ padding: "0" }}
                onClick={hitChangeState(id, "on")}
              >
                추가
              </button>
              <button
                type="button"
                className="btn_post"
                style={{ padding: "0" }}
                onClick={hitChangeState(id, "off")}
              >
                제거
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default ManageHitItems;
