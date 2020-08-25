import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardList.css";

const HitList = ({ hitPost }) => {
  const params = useParams();
  const searchType = params.searchType;
  const Keyword = params.Keyword;

  let pageId;
  if (params.pageId) {
    pageId = params.pageId;
  } else {
    pageId = 1;
  }
  let link;
  if (searchType !== undefined) {
    link = `/hit/search/${searchType}/Keyword/${Keyword}/page/${pageId}`;
  } else {
    link = `/hit/page/${pageId}`;
  }

  return (
    <>
      <div className="gall_listwrap list">
        <table
          className="gall_list"
          width="100%"
          cellpading="0"
          cellSpacing="0"
        >
          <caption>포럼 리스트</caption>
          <colgroup>
            <col></col>
            <col style={{ width: "18%" }}></col>
            <col style={{ width: "6%" }}></col>
            <col style={{ width: "6%" }}></col>
            <col style={{ width: "6%" }}></col>
            <col style={{ width: "6%" }}></col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">제목</th>
              <th scope="col">글쓴이</th>
              <th scope="col">작성일</th>
              <th scope="col">조회</th>
              <th scope="col">추천</th>
            </tr>
          </thead>
          <tbody>
            {hitPost !== null &&
              hitPost.map((post, index) => (
                <tr className="ub-content us-post" key={index}>
                  <td
                    className={
                      post.id == params.postId
                        ? "gall_tit ub-word selected"
                        : "gall_tit ub-word"
                    }
                  >
                    <Link to={`${link}/${post.id}`}>{post.title} </Link>
                    <span className="reply_num"> [{post.comment}]</span>
                  </td>
                  <td className="gall_writer ub-writer">
                    <span className="nickname">{post.displayName}</span>
                  </td>
                  <td className="gall_date">{post.created}</td>
                  <td className="gall_count">{post.count}</td>
                  <td className="gall_recommend">{post.good}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default HitList;
