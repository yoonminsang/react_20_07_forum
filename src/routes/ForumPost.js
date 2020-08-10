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
  BoardPost,
  BoardCommentList,
  BoardComment,
} from "../components";
import { useLocation } from "react-router-dom";

const Forum = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [title, setTitle] = useState(null);
  const [counting, setCounting] = useState(0);
  const [categoryPost, setCategoryPost] = useState(null);
  const [post, setPost] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(location.pathname)
      .then(function (res) {
        setTitle(res.data.title);
        setCounting(res.data.counting);
        setCategoryPost(res.data.categoryPost);
        setPost(res.data.post);
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
          <>
            <main className="container width1160 listwrap clear gallery_view">
              <BoardTitle title={title}></BoardTitle>
              <article>
                <BoardPost post={post}></BoardPost>
                <div className="view_comment">
                  <h2 className="blind">댓글 영역</h2>
                  <BoardCommentList></BoardCommentList>
                  <BoardComment></BoardComment>
                </div>
              </article>
              <article>
                <section className="left_content">
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
              </article>
            </main>
          </>
        )}
      </>
      <Footer></Footer>
    </>
  );
};

export default Forum;
