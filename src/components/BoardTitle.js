import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardTitle.css";

const BoardTitle = ({ title }) => {
  const params = useParams();
  useEffect(() => {
    title !== null && (document.title = `M's forum ${title} 포럼`);
  }, []);
  return (
    <>
      <header>
        <div className="page_head clear">
          <div className="fl clear">
            <h2>
              <Link to={`/forum/${params.category}`}>{title} 포럼</Link>
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};
export default BoardTitle;
