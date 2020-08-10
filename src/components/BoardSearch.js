import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./stylesheets/BoardSearch.css";
import { useInput } from "../hooks";

const BoardSearch = ({}) => {
  const history = useHistory();
  const params = useParams();
  const searchMaxLen = (value) => value.length <= 100;
  const search = useInput("", searchMaxLen);
  const [searchMenu, setSearchMenu] = useState(false);
  const changeSearchMenu = () => {
    searchMenu === true ? setSearchMenu(false) : setSearchMenu(true);
  };
  const [searchType, setSearchType] = useState("all");
  const [searchTypeHan, setSearchTypeHan] = useState("전체");
  return (
    <>
      <form className="board_search">
        <h3 className="blind">갤러리 내부 검색</h3>
        <div className="buttom_search_wrap clear">
          <div className="select_box bottom_array fl">
            <div className="select_area" onClick={changeSearchMenu}>
              <span>{searchTypeHan}</span>
              <span className="blind">게시물 정렬 옵션</span>
              <span className="inner">
                <em className="sp_img icon_option_more"></em>
              </span>
            </div>
            <ul
              className={
                searchMenu === true ? "option_box" : "option_box blind"
              }
            >
              <li
                onClick={() => {
                  setSearchType("all");
                  setSearchTypeHan("전체");
                  setSearchMenu(false);
                }}
              >
                전체
              </li>
              <li
                onClick={() => {
                  setSearchType("title");
                  setSearchTypeHan("제목");
                  setSearchMenu(false);
                }}
              >
                제목
              </li>
              <li
                onClick={() => {
                  setSearchType("content");
                  setSearchTypeHan("내용");
                  setSearchMenu(false);
                }}
              >
                내용
              </li>
              <li
                onClick={() => {
                  setSearchType("displayName");
                  setSearchTypeHan("글쓴이");
                  setSearchMenu(false);
                }}
              >
                글쓴이
              </li>
              <li
                onClick={() => {
                  setSearchType("title+content");
                  setSearchTypeHan("제목+내용");
                  setSearchMenu(false);
                }}
              >
                제목+내용
              </li>
            </ul>
          </div>
          <div className="bottom_search fl clear">
            <div className="inner_search">
              <input className="in_keyword" type="text" {...search}></input>
            </div>
            <button
              className="sp_img bnt_search"
              type="submit"
              onClick={() =>
                history.push(
                  `/forum/${params.category}/search/type/${searchType}/Keyword/${search.value}`
                )
              }
            >
              <span className="blind">검색</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default BoardSearch;
