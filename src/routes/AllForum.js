import React, { useState, useEffect } from "react";
import "./stylesheets/AllForum.css";
import axios from "axios";
import { Header, Footer, Menu } from "../containers";
import { RecentForum } from "../components";
import { Link } from "react-router-dom";

const AllForum = () => {
  const [subject, setSubject] = useState(null);
  const [items, setItems] = useState(null);
  const [paging, setPaging] = useState([1, 1, 1, 1, 1, 1, 1]);
  useEffect(() => {
    axios
      .get("/forum")
      .then(function (res) {
        setSubject(res.data.subject);
        setItems(res.data.subject_category);
      })
      .catch(function (err) {
        console.log(err);
      });
    document.title = "M's forum 전체 포럼";
    window.scrollTo(0, 0);
  }, []);

  const prev = (index) => () => {
    const copy = paging.slice();
    copy.splice(index, 1, paging[index] - 1);
    setPaging(copy);
  };

  const next = (index) => () => {
    const copy = paging.slice();
    copy.splice(index, 1, paging[index] + 1);
    setPaging(copy);
  };

  return (
    <>
      <Header></Header>
      <Menu></Menu>
      {items !== null && (
        <>
          <main className="container">
            <article className="clear">
              <section className="left_content">
                <RecentForum></RecentForum>
              </section>
              <section className="right_content">
                여기는 나중에 api같은거 채워넣자여기는 나중에 api같은거
                채워넣자여기는 나중에 api같은거 채워넣자
              </section>
            </article>
            <article className="category_listwrap">
              <h2 className="blind">카테고리별 갤러리 리스트</h2>
              <section className="cate_gall_box">
                <div className="cate_wrap">
                  <div className="cate_bind">
                    <div className="cate_box">
                      {subject.map((sub, index) => (
                        <div className="section_cate" key={index}>
                          <h4 className="cate_tit">
                            {sub.name}
                            <span className="list_num">
                              ({items[index].length})
                            </span>
                          </h4>
                          {items[index].length <= 11 ? (
                            <>
                              <div className="cate p_1">
                                <ul>
                                  {items[index].map((item, ind) => (
                                    <li key={ind}>
                                      <Link to={`/forum/${item.id}`}>
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="cate p_1">
                                <ul>
                                  {items[index].length > paging[index] * 10
                                    ? [...Array(10)].map((n, ind) => (
                                        <li key={ind}>
                                          <Link
                                            to={`/forum/${
                                              items[index][
                                                ind + 10 * (paging[index] - 1)
                                              ].id
                                            }`}
                                          >
                                            {
                                              items[index][
                                                ind + 10 * (paging[index] - 1)
                                              ].name
                                            }
                                          </Link>
                                        </li>
                                      ))
                                    : [
                                        ...Array(
                                          items[index].length -
                                            10 * (paging[index] - 1)
                                        ),
                                      ].map((n, ind) => (
                                        <li key={ind}>
                                          <Link
                                            to={`/forum/${
                                              items[index][
                                                ind + 10 * (paging[index] - 1)
                                              ].id
                                            }`}
                                          >
                                            {
                                              items[index][
                                                ind + 10 * (paging[index] - 1)
                                              ].name
                                            }
                                          </Link>
                                        </li>
                                      ))}
                                </ul>
                                <div className="btn_box under_paging">
                                  <button
                                    type="button"
                                    className={
                                      paging[index] === 1
                                        ? "btn_prev prev_cateList18"
                                        : "btn_prev prev_cateList18 on"
                                    }
                                    disabled={
                                      paging[index] === 1 ? true : false
                                    }
                                    onClick={prev(index)}
                                  >
                                    <span className="blind">이전</span>
                                    <em className="sp_img icon_prev"></em>
                                  </button>
                                  <div className="page_num">
                                    <strong className="now_num now_cateList18">
                                      {paging[index]}
                                    </strong>
                                    /
                                    <span className="total_num total_cateList18">
                                      {Math.ceil(items[index].length / 10)}
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    className={
                                      paging[index] ===
                                      Math.ceil(items[index].length / 10)
                                        ? "btn_next next_cateList18"
                                        : "btn_next next_cateList18 on"
                                    }
                                    disabled={
                                      paging[index] ===
                                      Math.ceil(items[index].length / 10)
                                        ? true
                                        : false
                                    }
                                    onClick={next(index)}
                                  >
                                    <span className="blind">이전</span>
                                    <em className="sp_img icon_next"></em>
                                  </button>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </main>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default AllForum;
