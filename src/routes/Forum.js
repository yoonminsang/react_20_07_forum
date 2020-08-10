import React, { useState, useEffect } from "react";
import "./stylesheets/AllForum.css";
import "./stylesheets/Forum.css";
import axios from "axios";
import { Header, Footer } from "../containers";
import {
  Menu,
  BoardTitle,
  BoardMenu,
  BoardList,
  BoardBottomMenu,
  BoardPaging,
  BoardSearch,
} from "../components";
import { useLocation } from "react-router-dom";

const Forum = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [title, setTitle] = useState(null);
  const [counting, setCounting] = useState(0);
  const [categoryPost, setCategoryPost] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(location.pathname)
      .then(function (res) {
        setTitle(res.data.title);
        setCounting(res.data.counting);
        setCategoryPost(res.data.categoryPost);
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
              <BoardTitle title={title}></BoardTitle>
              <BoardMenu></BoardMenu>
              <BoardList categoryPost={categoryPost}></BoardList>
              <BoardBottomMenu></BoardBottomMenu>
              <BoardPaging counting={counting}></BoardPaging>
              <BoardSearch></BoardSearch>
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

export default Forum;
