import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardTitle.css";

const BoardTitle = ({ title }) => {
  const params = useParams();
  useEffect(() => {
    title !== null && (document.title = `M's forum ${title} 포럼`);
    const nowObj = { category: params.category, title: title };
    let localObj = JSON.parse(localStorage.getItem("lately_forum"));

    if (localObj === null) {
      localObj = [nowObj];
    } else if (JSON.stringify(localObj[0]) === JSON.stringify(nowObj)) {
    } else if (
      localObj.findIndex((obj) => obj.category === nowObj.category) !== -1
    ) {
      localObj.splice(
        localObj.findIndex((obj) => obj.category === nowObj.category),
        1
      );
      localObj.unshift(nowObj);
    } else if (localObj.length === 15) {
      localObj.pop();
      localObj.unshift(nowObj);
    } else {
      localObj.unshift(nowObj);
    }
    localStorage.setItem("lately_forum", JSON.stringify(localObj));
  }, []);
  return (
    <>
      <header>
        <div className="page_head clear">
          <div className="fl clear">
            <h2>
              <Link to={`/forum/${params.category}`}>
                {title} 포럼
                {/* <span>({counting})</span> */}
              </Link>
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};
export default BoardTitle;
