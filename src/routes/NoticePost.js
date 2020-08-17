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
  NoticePost,
  NoticeCommentList,
  NoticeComment,
} from "../components";
import { useLocation, useParams } from "react-router-dom";

const NoticePost2 = ({ user_id }) => {
  const params = useParams();
  const postId = params.postId;
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [counting, setCounting] = useState(0);
  const [noticePost, setNoticePost] = useState(null);
  const [post, setPost] = useState(null);
  const [commentList, setCommentList] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(location.pathname)
      .then(function (res) {
        setCounting(res.data.counting);
        setNoticePost(res.data.noticePost);
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
      url: "/notice/goodbad/refresh",
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
      url: "/notice/comment/refresh",
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
          <main className="container width1160 listwrap clear">
            <NoticeTitle></NoticeTitle>
            <article>
              <NoticePost
                post={post}
                goodbadRefresh={goodbadRefresh}
              ></NoticePost>
              <div className="view_comment">
                <h2 className="blind">댓글 영역</h2>
                <NoticeCommentList
                  user_id={user_id}
                  commentList={commentList}
                  commentRefresh={commentRefresh}
                ></NoticeCommentList>
                <NoticeComment
                  user_id={user_id}
                  commentRefresh={commentRefresh}
                ></NoticeComment>
              </div>
            </article>
            <article style={{ marginTop: "50px" }}>
              <section className="left_content">
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
            </article>
          </main>
        )}
      </>
      <Footer></Footer>
    </>
  );
};

export default NoticePost2;
