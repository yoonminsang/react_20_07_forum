import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./stylesheets/Menu.css";
import axios from "axios";

const Menu = ({ email }) => {
  const history = useHistory();
  const [yesterPCount, setYesterPCount] = useState(null);
  const [yesterCCount, setYesterCCount] = useState(null);
  useEffect(() => {
    axios
      .get("/yesterday")
      .then(function (res) {
        setYesterPCount(res.data.post);
        setYesterCCount(res.data.comment);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  // const [subject, setSubject] = useState(null);
  // useEffect(() => {
  //   axios
  //     .get("/manage/category")
  //     .then(function (res) {
  //       setSubject(res.data.subject);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // }, []);
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
              {email === null ? (
                <a
                  onClick={() => (
                    alert("로그인이 필요합니다."), history.push("/auth/signin")
                  )}
                  style={{ cursor: "pointer" }}
                >
                  갤로그
                </a>
              ) : (
                <Link to={`/info/${email}`}>갤로그</Link>
              )}
            </li>
            <li>
              <Link to="/hit">HIT 포럼</Link>
            </li>
            <li>
              <Link to="/notice">공지글</Link>
            </li>
          </ul>
          <div className="transition">
            {transition === true ? (
              <div className={transition === true ? "on" : false}>
                어제 <em className="post_num">{yesterPCount}개</em> 게시글 등록
              </div>
            ) : (
              <div className={transition === false ? "on" : false}>
                어제 <em className="num">{yesterCCount}개</em> 댓글 등록
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};
export default Menu;
