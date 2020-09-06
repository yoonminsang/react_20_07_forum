import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./stylesheets/BoardList.css";
import axios from "axios";

const HitList = ({ hitPost }) => {
  console.log(hitPost);
  const params = useParams();
  const searchType = params.searchType;
  const Keyword = params.Keyword;
  const [selected, setSelected] = useState(null);
  const [userPost, setUserPost] = useState(null);
  const [userComment, setUserComment] = useState(null);
  const selecting = (email, id) => () => {
    console.log(email, id);
    if (id === selected) {
      setSelected(null);
    } else {
      axios
        .get(`/forum//info/${email}`)
        .then(function (res) {
          setUserPost(res.data.post);
          setUserComment(res.data.comment);
          setSelected(id);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

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
                    <span
                      className="nickname"
                      onClick={selecting(post.email, post.id)}
                    >
                      {post.displayName}
                    </span>
                    {selected === post.id && (
                      <div
                        className="user_data"
                        style={{
                          left: "50%",
                          top: "27px",
                          marginLeft: "-50px",
                        }}
                      >
                        <ul className="user_data_list">
                          <li>
                            <Link to={`/info/${post.email}/posting`}>
                              글
                              <em className="num font_lightred">{userPost}</em>
                            </Link>
                          </li>
                          <li>
                            <Link to={`/info/${post.email}/comment`}>
                              댓글
                              <em className="num font_lightred">
                                {userComment}
                              </em>
                            </Link>
                          </li>
                          <li className="bg_grey">
                            <Link
                              to={`/hit/search/displayName/Keyword/${post.displayName}`}
                            >
                              작성글 검색
                              <em className="sp_img icon_go"></em>
                            </Link>
                          </li>
                          <li className="bg_grey">
                            <Link to={`/info/${post.email}`}>
                              갤로그 가기
                              <em className="sp_img icon_go"></em>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
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
