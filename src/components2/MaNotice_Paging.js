import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const MaNotice_Paging = ({ itemsCounting }) => {
  const location = useLocation();
  const params = useParams();
  const pageId = params.pageId;
  let startIndex;
  let pagination = [];
  let prev, next;
  if (pageId === undefined) {
    for (let i = 1; i <= Math.ceil(itemsCounting / 15) && i <= 10; i++) {
      pagination.push(
        <li className={i === 1 ? "on" : undefined} key={i}>
          <Link to={`${location.pathname}/page/${i}`} className="link_num">
            {i}
          </Link>
        </li>
      );
    }
    prev = (
      <a className="link_paging">
        <span className="ico_blog ico_prev"></span>
      </a>
    );
    next =
      Math.ceil(itemsCounting / 15) > 10 ? (
        <Link to={`${location.pathname}/page/11`} className="link_paging">
          <span className="ico_blog ico_next"></span>
        </Link>
      ) : (
        <a className="link_paging">
          <span className="ico_blog ico_next"></span>
        </a>
      );
  } else if (params.Keyword === undefined) {
    startIndex = 10 * Math.floor((pageId - 1) / 10) + 1;
    for (
      let i = startIndex;
      i <= Math.ceil(itemsCounting / 15) && i <= startIndex + 9;
      i++
    ) {
      pagination.push(
        <li className={i == pageId ? "on" : undefined} key={i}>
          <Link to={`/manage/notice/page/${i}`} className="link_num">
            {i}
          </Link>
        </li>
      );
    }
    prev =
      pageId > 10 ? (
        <Link
          to={`/manage/notice/page/${startIndex - 10}`}
          className="link_paging"
        >
          <span className="ico_blog ico_prev"></span>
        </Link>
      ) : (
        <a className="link_paging">
          <span className="ico_blog ico_prev"></span>
        </a>
      );
    next =
      Math.ceil(itemsCounting / 15) > startIndex + 9 ? (
        <Link
          to={`/manage/notice/page/${startIndex + 10}`}
          className="link_paging"
        >
          <span className="ico_blog ico_next"></span>
        </Link>
      ) : (
        <a className="link_paging">
          <span className="ico_blog ico_next"></span>
        </a>
      );
  } else {
    startIndex = 10 * Math.floor((pageId - 1) / 10) + 1;
    for (
      let i = startIndex;
      i <= Math.ceil(itemsCounting / 15) && i <= startIndex + 9;
      i++
    ) {
      pagination.push(
        <li className={i == pageId ? "on" : undefined} key={i}>
          <Link
            to={`/manage/notice/search/type/${params.type}/Keyword/${params.Keyword}/page/${i}`}
            className="link_num"
          >
            {i}
          </Link>
        </li>
      );
    }
    prev =
      pageId > 10 ? (
        <Link
          to={`/manage/notice/search/type/${params.type}/Keyword/${
            params.Keyword
          }/page/${startIndex - 10}`}
          className="link_paging"
        >
          <span className="ico_blog ico_prev"></span>
        </Link>
      ) : (
        <a className="link_paging">
          <span className="ico_blog ico_prev"></span>
        </a>
      );
    next =
      Math.ceil(itemsCounting / 15) > startIndex + 9 ? (
        <Link
          to={`/manage/notice/search/type/${params.type}/Keyword/${
            params.Keyword
          }/page/${startIndex + 10}`}
          className="link_paging"
        >
          <span className="ico_blog ico_next"></span>
        </Link>
      ) : (
        <a className="link_paging">
          <span className="ico_blog ico_next"></span>
        </a>
      );
  }

  return (
    <>
      <div className="wrap_paging">
        <strong className="screenout">
          현재 {pageId === undefined ? 1 : pageId}
          페이지
        </strong>
        {prev}
        <ul className="list_paging">{pagination}</ul>
        {next}
      </div>
    </>
  );
};
export default MaNotice_Paging;
