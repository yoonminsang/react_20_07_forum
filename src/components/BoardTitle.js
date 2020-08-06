import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./stylesheets/BoardTitle.css";

const BoardTitle = ({ title }) => {
  const match = useRouteMatch();
  return (
    <>
      <header>
        <div className="page_head clear">
          <div className="fl clear">
            <h2>
              <Link to={`/forum/${match.params.category}`}>{title} 포럼</Link>
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};
export default BoardTitle;
