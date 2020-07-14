import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Header.css";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const changeMenu = () => {
    if (menu === true) {
      setMenu(false);
      document.getElementById("dimmed").remove();
    } else {
      setMenu(true);
      let dimmed = document.createElement("div");
      dimmed.id = "dimmed";
      document.body.append(dimmed);
    }
  };

  const [forum, setForum] = useState(null);

  return (
    <header className="header">
      <h1>
        <Link to="/">M's Forum</Link>
      </h1>

      <div className="signin">
        <Link to="/auth/signin">로그인 / 회원가입</Link>
      </div>

      <button
        className={menu === true ? "btn_menu on" : "btn_menu"}
        onClick={changeMenu}
      >
        {menu === true ? (
          <img src="/img/menuOn.png" alt="menuOn" />
        ) : (
          <img src="/img/menu.png" alt="menu" />
        )}
      </button>

      <div className={menu === true ? "menu on" : "menu"}>
        <nav className="gnb">
          <ul className="ul_forum_list">
            <li className="li_forum_list">
              <button
                type="button"
                className={forum === "recent" ? "btn_forum slide" : "btn_forum"}
                onClick={() =>
                  forum === "recent" ? setForum(null) : setForum("recent")
                }
              >
                최근 게시판
              </button>
              <ul
                className={
                  forum === "recent"
                    ? "ul_forum recent slide"
                    : "ul_forum recent"
                }
              >
                <li>1</li>
              </ul>
            </li>
            <li className="li_forum_list">
              <button
                type="button"
                className={
                  forum === "popular" ? "btn_forum slide" : "btn_forum"
                }
                onClick={() =>
                  forum === "popular" ? setForum(null) : setForum("popular")
                }
              >
                인기 게시판
              </button>
              <ul
                className={
                  forum === "popular"
                    ? "ul_forum popular slide"
                    : "ul_forum popular"
                }
              >
                <li>1</li>
              </ul>
            </li>
            <li className="li_forum_list">
              <button
                type="button"
                className={
                  forum === "request" ? "btn_forum slide" : "btn_forum"
                }
                onClick={() =>
                  forum === "request" ? setForum(null) : setForum("request")
                }
              >
                요청 게시판
              </button>
              <ul
                className={
                  forum === "request"
                    ? "ul_forum request slide"
                    : "ul_forum request"
                }
              >
                <li>1</li>
              </ul>
            </li>
            <li className="li_forum_list">
              <button
                type="button"
                className={forum === "all" ? "btn_forum slide" : "btn_forum"}
                onClick={() =>
                  forum === "all" ? setForum(null) : setForum("all")
                }
              >
                전체 게시판
              </button>
              <ul
                className={
                  forum === "all" ? "ul_forum all slide" : "ul_forum all"
                }
              >
                <li>1</li>
              </ul>
            </li>
          </ul>
        </nav>
        <p>DESIGN BY MINSANG</p>
      </div>
    </header>
  );
};
export default Header;
