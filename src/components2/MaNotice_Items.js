import React, { useState } from "react";
import { Link } from "react-router-dom";

const MaNotice_Items = ({
  index,
  id,
  title,
  status,
  comment,
  created,
  checked,
  changeChildChecked,
  noticeDelete,
  noticeChangeState,
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
            <a href="/" className="link_cont" target="_blank">
              {title}
            </a>
          </strong>
          <span className="txt_info fst">매니저</span>
          <span className="txt_info">{created}</span>
          <span className="txt_info">댓글 {comment}</span>
        </div>
        <div className="post_btn">
          <div className="info_btn">
            <div>
              <Link to={`/manage/notice/${id}`} className="btn_post">
                수정
              </Link>
              <Link to="#" className="btn_post" onClick={noticeDelete(id)}>
                삭제
              </Link>
              <Link to="/" className="btn_post">
                통계
              </Link>
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
                    {status === "visible" ? "공개" : "비공개"}
                  </span>
                  <span className="ico_blog"></span>
                </button>
                <div className="layer_opt">
                  <label className="lab_set">
                    <input
                      type="radio"
                      className="inp_set"
                      onClick={(e) => {
                        noticeChangeState(e, id, index);
                        setItemStateMenu(false);
                      }}
                      value="visible"
                    />
                    <span className="txt_set txt_eclip">공개</span>
                  </label>
                  <label className="lab_set">
                    <input
                      type="radio"
                      className="inp_set"
                      onClick={(e) => {
                        noticeChangeState(e, id, index);
                        setItemStateMenu(false);
                      }}
                      value="hidden"
                    />
                    <span className="txt_set txt_eclip">비공개</span>
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
export default MaNotice_Items;
