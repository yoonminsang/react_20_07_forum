import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../hooks";

const MaNotice_Items = ({
  allChecked,
  changeAllChecked,
  stateMenu,
  setStateMenu,
  isChecked,
  noticeSelectDelete,
  noticeSelectChangeState,
}) => {
  const history = useHistory();
  const changeStateMenu = () => {
    stateMenu === true ? setStateMenu(false) : setStateMenu(true);
  };
  const [searchMenu, setSearchMenu] = useState(false); // 검색누르면 창바뀌는거
  const [searchState, setSearchState] = useState("title"); //밑에걸로 바뀌게 해야돼
  const [searchStateHan, setSearchStateHan] = useState("제목");
  const [searchStateMenu, setSearchStateMenu] = useState(false); // 검색누르고 제목같은거 바꾸는거창나오게
  const changeSearchStateMenu = () => {
    searchStateMenu === true
      ? setSearchStateMenu(false)
      : setSearchStateMenu(true);
  };
  const searchMaxLen = (value) => value.length <= 100;
  const search = useInput("", searchMaxLen);

  return (
    <>
      <div className={searchMenu === true ? "wrap_search on" : "wrap_search"}>
        <div className="check_blog">
          <input
            type="checkbox"
            className="inp_check"
            checked={allChecked}
            onChange={changeAllChecked}
          />
        </div>

        <form className="search_blog">
          <div className="filter_search">
            <div
              className={
                searchStateMenu === true ? "opt_set opt_open" : "opt_set"
              }
            >
              <button
                type="button"
                className="btn_opt"
                onClick={changeSearchStateMenu}
              >
                <span className="txt_eclip">{searchStateHan}</span>
                <span className="ico_blog ico_open"></span>
              </button>
              <div className="layer_opt">
                <label
                  className={searchState === "title" ? "lab_set on" : "lab_set"}
                >
                  <input
                    type="radio"
                    className="inp_set"
                    value="title"
                    onClick={(e) => {
                      setSearchState(e.target.value);
                      setSearchStateHan("제목");
                      setSearchStateMenu(false);
                    }}
                  />
                  <span className="txt_set txt_eclip">제목</span>
                </label>
                <label
                  className={
                    searchState === "content" ? "lab_set on" : "lab_set"
                  }
                >
                  <input
                    type="radio"
                    className="inp_set"
                    value="content"
                    onClick={(e) => {
                      setSearchState(e.target.value);
                      setSearchStateHan("내용");
                      setSearchStateMenu(false);
                    }}
                  />
                  <span className="txt_set txt_eclip">내용</span>
                </label>
                <label
                  className={searchState === "tag" ? "lab_set on" : "lab_set"}
                >
                  <input
                    type="radio"
                    className="inp_set"
                    value="tag"
                    onClick={(e) => {
                      setSearchState(e.target.value);
                      setSearchStateHan("태그");
                      setSearchStateMenu(false);
                    }}
                  />
                  <span className="txt_set txt_eclip">태그</span>
                </label>
              </div>
            </div>
          </div>
          <input
            type="text"
            className="tf_search"
            placeholder="공지 관리에서 검색합니다"
            {...search}
          />

          <div className="info_search">
            <button
              type="button"
              className="btn_search"
              onClick={() => {
                setSearchMenu(true);
                setStateMenu(false);
              }}
            >
              검색
              <span className="ico_blog ico_search">열기</span>
            </button>
            <button
              type="submit"
              className="btn_search btn_query"
              disabled={search.value.length === 0 ? true : false}
              onClick={(e) => {
                e.preventDefault();
                history.push(
                  `/manage/notice/search/type/${searchState}/Keyword/${search.value}`
                );
              }}
            >
              <span className="ico_blog ico_search">검색 하기</span>
            </button>
            <button
              type="reset"
              className="btn_del"
              onClick={() => {
                setSearchMenu(false);
                setSearchStateMenu(false);
              }}
            >
              닫기
            </button>
          </div>
        </form>

        <div className={stateMenu === true ? "opt_blog opt_open" : "opt_blog"}>
          <button
            type="button"
            className="btn_opt"
            onClick={changeStateMenu}
            disabled={isChecked === true ? false : true}
          >
            변경
            <span className="ico_blog ico_open"></span>
          </button>
          <div className="layer_opt layer_double">
            <strong className="tit_opt">상태 변경</strong>
            <ul className="list_opt">
              <li>
                <label className="lab_btn">
                  공개
                  <input
                    type="button"
                    className="btn_g"
                    value="visible"
                    onClick={noticeSelectChangeState}
                  ></input>
                </label>
              </li>
              <li>
                <label className="lab_btn">
                  비공개
                  <input
                    type="button"
                    className="btn_g"
                    value="hidden"
                    onClick={noticeSelectChangeState}
                  ></input>
                </label>
              </li>
              <li>
                <label className="lab_btn">
                  삭제
                  <input
                    type="button"
                    className="btn_g"
                    value="delete"
                    onClick={noticeSelectDelete}
                  ></input>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaNotice_Items;
