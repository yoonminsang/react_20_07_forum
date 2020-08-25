import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./stylesheets/BoardTitle.css";

const NoticeTitle = () => {
  useEffect(() => {
    document.title = `M's forum HIT 포럼`;
  }, []);
  return (
    <>
      <header>
        <div className="page_head clear">
          <div className="fl clear">
            <h2>
              <Link to="/notice">HIT 포럼</Link>
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};
export default NoticeTitle;
