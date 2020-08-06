import React from "react";
import { Link } from "react-router-dom";
import "./stylesheets/BoardList.css";

const BoardList = ({ categoryPost }) => {
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
            <col style={{ width: "7%" }}></col>
            <col></col>
            <col style={{ width: "18%" }}></col>
            <col style={{ width: "6%" }}></col>
            <col style={{ width: "6%" }}></col>
            <col style={{ width: "6%" }}></col>
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
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
                  <td className="gall_num">{post.id}</td>
                  <td className="gall_tit ub-word">
                    <a href="/">
                      {post.title}
                      <span className="reply_num"> [{post.comment}]</span>
                    </a>
                  </td>
                  <td className="gall_writer ub-writer">
                    <span className="nickname">
                      <em>{post.displayName}</em>
                    </span>
                  </td>
                  <td className="gall_date">{post.created}</td>
                  <td className="gall_count">{post.comment}</td>
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
