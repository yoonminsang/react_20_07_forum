import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./stylesheets/BoardPaging.css";

const BoardPaging = ({ counting }) => {
  const match = useRouteMatch();
  let pageId;
  if (match.params.pageId) {
    pageId = match.params.pageId;
  } else {
    pageId = 1;
  }
  const category = match.params.category;
  const searchType = match.params.searchType;
  const modeType = match.params.modeType;
  const endCounting = Math.ceil(counting / 50);
  const prevCounting = 1 + 15 * (Math.ceil(pageId / 15) - 2);
  const nextCounting = 1 + 15 * Math.ceil(pageId / 15);
  let list = [];
  let first, prev, next, end;

  if (searchType !== undefined) {
    for (
      let i = 15 * (Math.ceil(pageId / 15) - 1) + 1;
      i <= 15 * (Math.ceil(pageId / 15) - 1) + 15 && i <= endCounting;
      i++
    ) {
      if (i == pageId) {
        list.push(<em key={i}>{i}</em>);
      } else {
        list.push(
          <Link
            to={`/forum/${category}/search/${searchType}/page/${i}`}
            key={i}
          >
            {i}
          </Link>
        );
      }
    }
    first = <Link to={`/forum/${category}/search/${searchType}`}>처음</Link>;
    end = (
      <Link to={`/forum/${category}/search/${searchType}/page/${endCounting}`}>
        끝
      </Link>
    );
    prev = (
      <Link to={`/forum/${category}/search/${searchType}/page/${prevCounting}`}>
        이전
      </Link>
    );
    next = (
      <Link to={`/forum/${category}/search/${searchType}/page/${nextCounting}`}>
        다음
      </Link>
    );
  } else if (modeType !== undefined) {
    for (
      let i = 15 * (Math.ceil(pageId / 15) - 1) + 1;
      i <= 15 * (Math.ceil(pageId / 15) - 1) + 15 && i <= endCounting;
      i++
    ) {
      if (i == pageId) {
        list.push(<em key={i}>{i}</em>);
      } else {
        list.push(
          <Link to={`/forum/${category}/mode/${modeType}/page/${i}`} key={i}>
            {i}
          </Link>
        );
      }
    }
    first = <Link to={`/forum/${category}/mode/${modeType}`}>처음</Link>;
    end = (
      <Link to={`/forum/${category}/mode/${modeType}/page/${endCounting}`}>
        끝
      </Link>
    );
    prev = (
      <Link to={`/forum/${category}/mode/${modeType}/page/${prevCounting}`}>
        이전
      </Link>
    );
    next = (
      <Link to={`/forum/${category}/mode/${modeType}/page/${nextCounting}`}>
        다음
      </Link>
    );
  } else {
    for (
      let i = 15 * (Math.ceil(pageId / 15) - 1) + 1;
      i <= 15 * (Math.ceil(pageId / 15) - 1) + 15 && i <= endCounting;
      i++
    ) {
      if (i == pageId) {
        list.push(<em key={i}>{i}</em>);
      } else {
        list.push(
          <Link to={`/forum/${category}/page/${i}`} key={i}>
            {i}
          </Link>
        );
      }
    }
    first = <Link to={`/forum/${category}`}>처음</Link>;
    end = <Link to={`/forum/${category}/page/${endCounting}`}>끝</Link>;
    prev = <Link to={`/forum/${category}/page/${prevCounting}`}>이전</Link>;
    next = <Link to={`/forum/${category}/page/${nextCounting}`}>다음</Link>;
  }

  return (
    <>
      <div className="bottom_paging_box">
        {pageId > 15 && first}
        {pageId > 15 && prev}
        {list}
        {15 * Math.ceil(endCounting / 15) - pageId >= 15 && next}
        {15 * Math.ceil(endCounting / 15) - pageId >= 15 && end}
      </div>
    </>
  );
};
export default BoardPaging;
