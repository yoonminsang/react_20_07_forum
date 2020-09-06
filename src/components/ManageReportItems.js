import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageReportItems = ({
  id,
  category_id,
  title,
  comment,
  created,
  report,
  bad,
  report_status,
  checked,
  changeChildChecked,
  reportChangeState,
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
          <span className="txt_info">신고 {report}</span>
          <span className="txt_info">비추천 {bad}</span>
        </div>
        <div className="post_btn">
          {report_status === "off" && (
            <span className="ico_blog ico_private">비공개</span>
          )}
          <div className="info_btn">
            <div>
              {/* <button
                type="button"
                className="btn_post"
                style={{ padding: "0" }}
                onClick={reportChangeState(id, "off")}
              >
                보류
              </button> */}
              <button
                type="button"
                className="btn_post"
                style={{ padding: "0" }}
                onClick={() => reportChangeState(id, "delete")}
              >
                제거
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
                    {report_status === "null" ? "대기" : "보류"}
                  </span>
                  <span className="ico_blog"></span>
                </button>
                <div className="layer_opt">
                  <label className="lab_set">
                    <input
                      type="radio"
                      className="inp_set"
                      onClick={() => {
                        reportChangeState(id, "null");
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
                        reportChangeState(id, "off");
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
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default ManageReportItems;
