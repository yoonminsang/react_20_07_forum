import React, { useState, useEffect } from "react";
import "./stylesheets/Info.css";
import {
  InfoHead,
  InfoTopBar,
  InfoMenu,
  InfoContentHeader,
  InfoContentBox,
} from "../components";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { Footer } from "../containers";

const Info = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const email = params.email;
  const location = useLocation();
  const [displayName, setDisplayName] = useState(null);
  const [postCount, setPostCount] = useState(null);
  const [commentCount, setCommentCount] = useState(null);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    axios
      .get(location.pathname)
      .then(function (res) {
        setDisplayName(res.data.displayName);
        setPostCount(res.data.postCount);
        setCommentCount(res.data.commentCount);
        setPost(res.data.post);
        setComment(res.data.comment);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
    document.title = "M's forum 갤로그";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="gray">
        <div className="innerbox">
          <div className="gallog_wrap width1160">
            <InfoHead></InfoHead>
            <InfoTopBar displayName={displayName}></InfoTopBar>
            <main className="container">
              <h2 className="blind">갤로그 홈</h2>
              <div className="conent_wrap">
                <InfoMenu></InfoMenu>
                {loading === false && (
                  <>
                    <section>
                      <div className="gallog_cont">
                        <InfoContentHeader
                          title="내 게시글"
                          count={postCount}
                          url={`/info/${email}/posting`}
                        ></InfoContentHeader>
                        <InfoContentBox content={post}></InfoContentBox>
                      </div>
                      <div className="gallog_cont">
                        <InfoContentHeader
                          title="내 댓글"
                          count={commentCount}
                          url={`/info/${email}/comment`}
                        ></InfoContentHeader>
                        <InfoContentBox content={comment}></InfoContentBox>
                      </div>
                    </section>
                  </>
                )}
              </div>
            </main>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Info;
