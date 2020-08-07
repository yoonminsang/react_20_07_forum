import React from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardList.css";

const BoardList = ({ categoryPost }) => {
  const params = useParams();
  const category = params.category;
  const searchType = params.searchType;
  const modeType = params.modeType;
  let pageId;
  let link = [];
  if (params.pageId) {
    pageId = params.pageId;
  } else {
    pageId = 1;
  }
  if (searchType !== undefined) {
    link.push(`/forum/${category}/search/${searchType}/page/${pageId}`);
  } else if (modeType !== undefined) {
    link.push(`/forum/${category}/mode/${modeType}/page/${pageId}`);
  } else {
    link.push(`/forum/${category}/page/${pageId}`);
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
            {/* <col style={{ width: "7%" }}></col> */}
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
            {categoryPost !== null &&
              categoryPost.map((post, index) => (
                <tr className="ub-content us-post" key={index}>
                  {/* <td className="gall_num">{post.id}</td> */}
                  <td className="gall_tit ub-word">
                    <Link to={`${link}/${post.id}`}>
                      {post.title}
                      <span className="reply_num"> [{post.comment}]</span>
                    </Link>
                  </td>
                  <td className="gall_writer ub-writer">
                    <span className="nickname">
                      <em>{post.displayName}</em>
                    </span>
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
export default BoardList;
