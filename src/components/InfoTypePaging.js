import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardPaging.css";

const InfoTypePaging = ({ counting }) => {
  const params = useParams();
  let pageId;
  if (params.pageId) {
    pageId = params.pageId;
  } else {
    pageId = 1;
  }
  const email = params.email;
  const type = params.type;

  const endCounting = Math.ceil(counting / 50);

  const prevCounting = 1 + 15 * (Math.ceil(pageId / 15) - 2);
  const nextCounting = 1 + 15 * Math.ceil(pageId / 15);
  let list = [];
  let first, prev, next, end;

  for (
    let i = 15 * (Math.ceil(pageId / 15) - 1) + 1;
    i <= 15 * (Math.ceil(pageId / 15) - 1) + 15 && i <= endCounting;
    i++
  ) {
    if (i == pageId) {
      list.push(<em key={i}>{i}</em>);
    } else {
      list.push(
        <Link to={`/info/${email}/${type}/page/${i}`} key={i}>
          {i}
        </Link>
      );
    }
  }
  first = <Link to={`/info/${email}/${type}`}>처음</Link>;
  end = <Link to={`/info/${email}/${type}//page/${endCounting}`}>끝</Link>;
  prev = <Link to={`/info/${email}/${type}//page/${prevCounting}`}>이전</Link>;
  next = <Link to={`/info/${email}/${type}//page/${nextCounting}`}>다음</Link>;

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
export default InfoTypePaging;
