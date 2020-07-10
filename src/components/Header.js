import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Header.css";

const Header = () => {
  const changeMenu = () => {
    const btMenu = document.querySelector(".bt_menu");
    const btMenuImg = document.querySelector(".bt_menu img");
    const menu = document.querySelector(".menu");
    if (btMenu.className === "bt_menu") {
      btMenuImg.src = "img/menuOn.png";
      btMenuImg.alt = "menuOn";
      btMenu.classList.add("on");
      menu.classList.add("on");
      let dimmed = document.createElement("div");
      dimmed.id = "dimmed";
      document.body.append(dimmed);
    } else {
      btMenuImg.src = "img/menu.png";
      btMenuImg.alt = "menu";
      btMenu.classList.remove("on");
      menu.classList.remove("on");
      document.querySelector("#dimmed").remove();
    }
  };

  const slide = (e) => {
    if (e.target.className === "bt_forum") {
      e.target.classList.add("slide");
      e.target.nextSibling.classList.add("slide");
    } else {
      e.target.classList.remove("slide");
      e.target.nextSibling.classList.remove("slide");
    }
  };

  return (
    <header className="header">
      <h1>
        <Link to="/">M's Forum</Link>
      </h1>
      <div className="login">
        <Link to="/auth/login">로그인 / 회원가입</Link>
      </div>
      <button className="bt_menu" onClick={changeMenu}>
        <img src="img/menu.png" alt="menu" />
      </button>
      <div className="menu">
        <nav className="gnb">
          <ul className="ul_forum_list">
            <li className="li_forum_list">
              <button type="button" className="bt_forum" onClick={slide}>
                최근 게시판
              </button>
              <ul className="ul_forum recent"></ul>
            </li>
            <li className="li_forum_list">
              <button type="button" className="bt_forum" onClick={slide}>
                인기 게시판
              </button>
              <ul className="ul_forum popular"></ul>
            </li>
            <li className="li_forum_list">
              <button type="button" className="bt_forum" onClick={slide}>
                요청 게시판
              </button>
              <ul className="ul_forum request"></ul>
            </li>
            <li className="li_forum_list">
              <button type="button" className="bt_forum" onClick={slide}>
                전체 게시판
              </button>
              <ul className="ul_forum all"></ul>
            </li>
          </ul>
        </nav>
        <p>DESIGN BY MINSANG</p>
      </div>
    </header>
  );
};
export default Header;
