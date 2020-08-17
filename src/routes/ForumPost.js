import React, { useState, useEffect } from "react";
import "./stylesheets/AllForum.css";
import "./stylesheets/Forum.css";
import axios from "axios";
import { Header, Footer, Menu } from "../containers";
import {
  // Menu,
  BoardTitle,
  BoardList,
  BoardBottomMenu,
  BoardPaging,
  BoardSearch,
  BoardPost,
  BoardCommentList,
  BoardComment,
  BoardPostMenu,
} from "../components";
import { useLocation, useParams } from "react-router-dom";

const Forum = ({ user_id, displayName }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const params = useParams();
  const postId = params.postId;
  const [title, setTitle] = useState(null);
  const [counting, setCounting] = useState(0);
  const [categoryPost, setCategoryPost] = useState(null);
  const [post, setPost] = useState(null);
  const [commentList, setCommentList] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(location.pathname)
      .then(function (res) {
        setTitle(res.data.title);
        setCounting(res.data.counting);
        setCategoryPost(res.data.categoryPost);
        setPost(res.data.post);
        setCommentList(res.data.commentList);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const goodbadRefresh = () => {
    axios({
      method: "post",
      url: "/forum/goodbad/refresh",
      data: {
        postId,
      },
    })
      .then(function (res) {
        setPost({ ...post, good: res.data.post.good, bad: res.data.post.bad });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const commentRefresh = () => {
    axios({
      method: "post",
      url: "/forum/comment/refresh",
      data: {
        postId,
      },
    })
      .then(function (res) {
        setCommentList(res.data.commentList);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

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
                <BoardPost
                  post={post}
                  user_id={user_id}
                  goodbadRefresh={goodbadRefresh}
                ></BoardPost>
                <div className="view_comment">
                  <h2 className="blind">댓글 영역</h2>
                  <BoardCommentList
                    user_id={user_id}
                    commentList={commentList}
                    commentRefresh={commentRefresh}
                  ></BoardCommentList>
                  <BoardComment
                    user_id={user_id}
                    commentRefresh={commentRefresh}
                  ></BoardComment>
                </div>
                <BoardPostMenu
                  state={displayName === post.displayName}
                ></BoardPostMenu>
              </article>
              <article>
                <section className="left_content">
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
