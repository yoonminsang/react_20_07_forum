import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/RecentForum.css";

const NoticeTitle = () => {
  const [loading, setLoading] = useState(true);
  const [localObj, setLocalObj] = useState(null);
  const [paging, setPaging] = useState(null);
  const params = useParams();

  useEffect(() => {
    setLocalObj(JSON.parse(localStorage.getItem("lately_forum")));
    setPaging(1);
    setLoading(false);
  }, []);
  const prevPaging = () => {
    setPaging(paging - 1);
  };
  const nextPaging = () => {
    setPaging(paging + 1);
  };
  const localDelete = (ind) => () => {
    localObj.splice(ind + 5 * (paging - 1), 1);
    localStorage.setItem("lately_forum", JSON.stringify(localObj));
    setLocalObj(JSON.parse(localStorage.getItem("lately_forum")));
  };

  return (
    <>
      <div
        className={
          params.category === undefined
            ? "visit_history gallmain"
            : "visit_history"
        }
      >
        <h3 className="tit">최근 방문 포럼</h3>
        {loading === false && (
          <>
            {localObj === null ? (
              <p className="empty_visit">최근 방문 갤러리가 없습니다.</p>
            ) : (
              <>
                <button
                  className={
                    paging === 1 ? "bnt_visit_prev" : "bnt_visit_prev on"
                  }
                  disabled={paging === 1 ? true : false}
                  type="button"
                  onClick={prevPaging}
                >
                  <span className="blind">이전</span>
                  <em className="sp_img icon_prev"></em>
                </button>
                <ul className="visit_list">
                  {localObj.slice(5 * (paging - 1)).map((obj, ind) => (
                    <li key={ind}>
                      <Link to={`/forum/${obj.category}`} className="logClass">
                        {obj.title}
                      </Link>
                      <button
                        className="btn_visit_del"
                        type="button"
                        onClick={localDelete(ind)}
                      >
                        <span className="blind">삭제</span>
                        <em className="icon_visit_del"></em>
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    paging * 5 >= localObj.length
                      ? "bnt_visit_next"
                      : "bnt_visit_next on"
                  }
                  disabled={paging * 5 >= localObj.length ? true : false}
                  onClick={nextPaging}
                  type="button"
                >
                  <span className="blind">다음</span>
                  <em className="sp_img icon_next"></em>
                </button>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default NoticeTitle;
