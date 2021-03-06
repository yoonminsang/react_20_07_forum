import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageHitItems = ({
  id,
  category_id,
  title,
  comment,
  hit,
  hit_status,
  good,
  created,
  checked,
  changeChildChecked,
  hitChangeState,
  name,
  displayName,
}) => {
  const [itemStateMenu, setItemStateMenu] = useState(false);
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
          <span className="txt_cate txt_ellip">{name}</span>
          <span className="txt_info fst">{displayName}</span>
          <span className="txt_info">{created}</span>
          <span className="txt_info">댓글 {comment}</span>
          <span className="txt_info">힛 {hit}</span>
          <span className="txt_info">추천 {good}</span>
        </div>
        <div className="post_btn">
          {hit_status === "off" && (
            <span className="ico_blog ico_private">비공개</span>
          )}
          <div className="info_btn">
            <div>
              <button
                type="button"
                className="btn_post"
                style={{ padding: "0" }}
                onClick={() => hitChangeState(id, "on")}
              >
                추가
              </button>
              <div
                className={
                  itemStateMenu === true
                    ? "opt_set opt_post2 opt_open"
                    : "opt_set opt_post2"
                }
              >
                <button
                  type="button"
                  className="btn_opt"
                  onClick={() => setItemStateMenu(true)}
                >
                  <span className="txt_eclip">
                    {hit_status === "null" ? "대기" : "보류"}
                  </span>
                  <span className="ico_blog"></span>
                </button>
                <div className="layer_opt">
                  <label className="lab_set">
                    <input
                      type="radio"
                      className="inp_set"
                      onClick={() => {
                        hitChangeState(id, "null");
                        setItemStateMenu(false);
                      }}
                      value="null"
                    />
                    <span className="txt_set txt_eclip">대기</span>
                  </label>
                  <label className="lab_set">
                    <input
                      type="radio"
                      className="inp_set"
                      onClick={() => {
                        hitChangeState(id, "off");
                        setItemStateMenu(false);
                      }}
                      value="hidden"
                    />
                    <span className="txt_set txt_eclip">보류</span>
                  </label>
                  <button
                    type="button"
                    className="btn_close"
                    onClick={() => setItemStateMenu(false)}
                  >
                    <span className="ico_blog"></span>
                  </button>
                </div>
              </div>
              {/* <button
                type="button"
                className="btn_post"
                style={{ padding: "0" }}
                onClick={hitChangeState(id, "off")}
              >
                제거
              </button> */}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default ManageHitItems;
