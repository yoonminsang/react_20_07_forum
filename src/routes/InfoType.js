import React, { useState, useEffect } from "react";
import "./stylesheets/Info.css";
import {
  // InfoHead,
  InfoTopBar,
  InfoMenu,
  InfoTypeContentHeader,
  InfoContentBox,
  InfoTypePaging,
} from "../components";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { Footer, InfoHead } from "../containers";

const InfoType = () => {
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const email = params.email;
  const location = useLocation();
  const [displayName, setDisplayName] = useState(null);
  const [count, setCount] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios
      .get(location.pathname)
      .then(function (res) {
        setDisplayName(res.data.displayName);
        setCount(res.data.count);
        setContent(res.data.content);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
    document.title = "M's forum 갤로그";
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
                        <InfoTypeContentHeader
                          count={count}
                        ></InfoTypeContentHeader>
                        <InfoContentBox content={content}></InfoContentBox>
                        <InfoTypePaging counting={count}></InfoTypePaging>
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

export default InfoType;
