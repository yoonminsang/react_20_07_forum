import React, { useState, useEffect } from "react";
import "./stylesheets/AllForum.css";
import "./stylesheets/Forum.css";
import axios from "axios";
import { Header, Footer, Menu } from "../containers";
import {
  // Menu,
  NoticeTitle,
  NoticeList,
  NoticePaging,
  NoticeSearch,
} from "../components";
import { useLocation } from "react-router-dom";

const Notice = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [counting, setCounting] = useState(0);
  const [noticePost, setNoticePost] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(location.pathname)
      .then(function (res) {
        setCounting(res.data.counting);
        setNoticePost(res.data.noticePost);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <>
        {loading === false && (
          <main className="container width1160 listwrap clear">
            <section className="left_content">
              <NoticeTitle></NoticeTitle>
              <NoticeList noticePost={noticePost}></NoticeList>
              <NoticePaging counting={counting}></NoticePaging>
              <NoticeSearch></NoticeSearch>
            </section>
            <section className="right_content">
              <div>
                여기는 나중에 api같은거 채워넣자여기는 나중에 api같은거
                채워넣자여기는 나중에 api같은거 채워넣자
              </div>
            </section>
          </main>
        )}
      </>
      <Footer></Footer>
    </>
  );
};

export default Notice;
