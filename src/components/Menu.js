import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/Menu.css";
import axios from "axios";

const Menu = () => {
  const [subject, setSubject] = useState(null);
  useEffect(() => {
    axios
      .get("/manage/category")
      .then(function (res) {
        setSubject(res.data.subject);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  const [transition, setTransition] = useState(true);
  const changeTransition = () => {
    transition === true ? setTransition(false) : setTransition(true);
  };
  useEffect(() => {
    const interval = setInterval(changeTransition, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [transition]);
  return (
    <>
      <div className="gnb_bar">
        <nav className="gnb">
          <h2 className="blind">GNB</h2>
          <ul className="gnb_list">
            <li className="gnb_list_hover">
              <Link to="/forum">포럼</Link>
              {/* <div className="depth2">
                <ul className="depth2_list">
                  {subject !== null &&
                    subject.map((i, index) => (
                      <li key={index}>
                        <Link to={`/forum/${i.id}`}>{i.name}</Link>
                      </li>
                    ))}
                </ul>
              </div> */}
            </li>
            <li>
              <Link to="/info/post">내가 쓴 글</Link>
            </li>
            <li>
              <Link to="/info/comment">내가 쓴 댓글</Link>
            </li>
            <li>
              <Link to="/forum/popular">인기글</Link>
            </li>
          </ul>
          <div className="transition">
            {transition === true ? (
              <div className={transition === true ? "on" : false}>
                M's forum에 오신것을
              </div>
            ) : (
              <div className={transition === false ? "on" : false}>
                환영합니다
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
export default Menu;
