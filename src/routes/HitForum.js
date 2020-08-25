import React, { useState, useEffect } from "react";
import "./stylesheets/AllForum.css";
import "./stylesheets/Forum.css";
import axios from "axios";
import { Header, Footer, Menu } from "../containers";
import {
  // Menu,
  HitTitle,
  HitList,
  HitPaging,
  HitSearch,
} from "../components";
import { useLocation } from "react-router-dom";

const HitForum = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [counting, setCounting] = useState(0);
  const [hitPost, setHitPost] = useState(null);
  console.log("HH");
  useEffect(() => {
    setLoading(true);
    axios
      .get(location.pathname)
      .then(function (res) {
        setCounting(res.data.counting);
        setHitPost(res.data.hitPost);
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
              <HitTitle></HitTitle>
              <HitList hitPost={hitPost}></HitList>
              <HitPaging counting={counting}></HitPaging>
              <HitSearch></HitSearch>
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

export default HitForum;
