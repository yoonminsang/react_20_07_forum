import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation, Link } from "react-router-dom";
import { useInput } from "../hooks";

const ManageHitMenu = ({
  allChecked,
  changeAllChecked,
  stateMenu,
  setStateMenu,
  isChecked,
  postSelectDelete,
  subject,
  subjectCategory,
}) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const category = params.category;
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
  const [viewState, setViewState] = useState(false);
  const changeViewState = () => {
    viewState === true ? setViewState(false) : setViewState(true);
  };
  useEffect(() => {
    setViewState(false);
  }, [location.pathname]);

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
                setSearchStateMenu(false);
                history.push(
                  `/manage/post/search/type/${searchState}/Keyword/${search.value}`
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
                  글 삭제
                  <input
                    type="button"
                    className="btn_g"
                    onClick={postSelectDelete}
                  ></input>
                </label>
              </li>
              {/* <li>
                <label className="lab_btn">
                  힛 포럼 대기
                  <input
                    type="button"
                    className="btn_g"
                    onClick={hitSelect("null")}
                  ></input>
                </label>
              </li>
              <li>
                <label className="lab_btn">
                  힛 포럼 보류
                  <input
                    type="button"
                    className="btn_g"
                    onClick={hitSelect("off")}
                  ></input>
                </label>
              </li> */}
            </ul>
          </div>
        </div>
        <div className={viewState === true ? "opt_blog opt_open" : "opt_blog"}>
          <button className="btn_opt" type="button" onClick={changeViewState}>
            보기<span className="ico_blog ico_open"></span>
          </button>
          <div className="layer_opt layer_double">
            <Link to="/manage/post" className="lab_btn lab_all">
              모든 글 보기
              <input
                type="button"
                className="btn_g"
                value="모든 글 보기"
              ></input>
            </Link>
            {subject.map((sub, index) => (
              <div className="scroll_opt" key={sub.id}>
                <strong className="tit_opt">{sub.name}</strong>
                <ul>
                  {subjectCategory[index].map((cate) => (
                    <li
                      key={cate.id}
                      className={category == cate.id ? "on" : null}
                    >
                      <Link
                        to={`/manage/post/category/${cate.id}`}
                        className="lab_btn"
                      >
                        {cate.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* <strong className="tit_opt"> 보기</strong>
            <ul className="list_opt">
              <li className={category === "null" ? "on" : null}>
                <Link to="/manage/hit/null" className="lab_btn">
                  힛 포럼 대기
                </Link>
              </li>
              <li className={category === "off" ? "on" : null}>
                <Link to="/manage/hit/off" className="lab_btn">
                  힛 포럼 보류
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default ManageHitMenu;
