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
import { Link, useLocation } from "react-router-dom";

const Forum = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [title, setTitle] = useState(null);
  const [counting, setCounting] = useState(0);
  // const [category, setCategory] = useState(null);
  const [categoryPost, setCategoryPost] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(location.pathname)
      .then(function (res) {
        // setCategory(res.data.category);
        setTitle(res.data.title);
        setCounting(res.data.counting);
        setCategoryPost(res.data.categoryPost);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
    document.title = "M's forum 포럼";
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const changePost = (value) => () => {
    console.log(value);
    //아직 안한거야  밑에 바텀메뉴도 마찬가지
  };

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <>
        {loading === false && (
          <div className="container width1160 listwrap clear">
            <section className="left_content">
              <BoardTitle title={title}></BoardTitle>
              <BoardMenu changePost={changePost}></BoardMenu>
              <BoardList categoryPost={categoryPost}></BoardList>
              <BoardBottomMenu changePost={changePost}></BoardBottomMenu>
              <BoardPaging counting={counting}></BoardPaging>
              <BoardSearch></BoardSearch>
            </section>
            <section className="right_content">
              <div>
                여기는 나중에 api같은거 채워넣자여기는 나중에 api같은거
                채워넣자여기는 나중에 api같은거 채워넣자
              </div>
            </section>
          </div>
        )}
      </>
      <Footer></Footer>
    </>
  );
};

export default Forum;
