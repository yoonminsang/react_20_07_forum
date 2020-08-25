import "./stylesheets/Manage.css";
import {
  ManageMenu,
  ManageHitMenu,
  ManageHitItems,
  ManageHitPaging,
} from "../components";
import React, { useState, useEffect } from "react";
import "../components/stylesheets/MaNotice.css";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
// import { MaNotice_Menu, MaNotice_Items, MaNotice_Paging } from "../components2";

import { ManageHeader, Footer } from "../containers";
const ManageHit = () => {
  const location = useLocation();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [allChecked, setAllChecked] = useState(false);
  const changeAllChecked = (e) => {
    setAllChecked(!allChecked);
    setItems(items.map((item) => ({ ...item, checked: e.target.checked })));
    setStateMenu(false);
  };
  const changeChildChecked = (e) => {
    setItems(
      items.map((item) =>
        item.id === e.target.value * 1
          ? { ...item, checked: e.target.checked }
          : item
      )
    );
    setStateMenu(false);
  };
  const [isChecked, setIsChecked] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);

  const hitSelect = (status) => () => {
    const id = items
      .filter((item) => item.checked === true)
      .map((item) => item.id)
      .join();
    axios({
      method: "post",
      url: "/manage/hit/select_process",
      data: {
        id,
        status,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          refresh();
        } else {
          alert("오류 발생");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const [items, setItems] = useState(null);
  const [itemsCounting, setItemsCounting] = useState(null);

  const refresh = () => {
    axios
      .get(location.pathname)
      .then(function (res) {
        setItems(res.data.category_post);
        setItemsCounting(res.data.counting);
        setStateMenu(false);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    refresh();
  }, [location.pathname]);

  useEffect(() => {
    if (items !== null) {
      let i = 0;
      items.forEach((item) => item.checked === true && i++);
      if (items.length === i) {
        setAllChecked(true);
      } else {
        setAllChecked(false);
      }
      if (i > 0) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    }
  }, [items]);

  const hitChangeState = (id, status) => () => {
    axios({
      method: "post",
      url: "/manage/hit/select_process",
      data: {
        id,
        status,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          refresh();
        } else {
          alert("오류 발생");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  // const noticeDelete = (id) => () => {
  //   axios({
  //     method: "post",
  //     url: "/manage/notice/delete_process",
  //     data: {
  //       id,
  //     },
  //   })
  //     .then(function (res) {
  //       if (res.data.process) {
  //         refresh();
  //       } else {
  //         alert("오류 발생");
  //       }
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // };

  // const noticeChangeState = (e, id, index) => {
  //   const value = e.target.value;
  //   if (value !== items[index].status) {
  //     axios({
  //       method: "post",
  //       url: "/manage/notice/status_process",
  //       data: {
  //         id,
  //         status: value,
  //       },
  //     })
  //       .then(function (res) {
  //         if (res.data.process) {
  //           setItems(
  //             items.map((item) =>
  //               item.id === id ? { ...item, status: value } : item
  //             )
  //           );
  //         } else {
  //           alert("오류 발생");
  //         }
  //       })
  //       .catch(function (err) {
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <div className="mArticle">
            <>
              {loading === false && (
                <>
                  {params.Keyword === undefined ? (
                    <h3 className="tit_cont">
                      힛 포럼 관리
                      <span className="txt_count">{itemsCounting}</span>
                    </h3>
                  ) : (
                    <h3 className="tit_cont">
                      <span className="txt_result">'{params.Keyword}'</span>
                      검색 결과
                      <span className="txt_count">{itemsCounting}</span>
                      <Link
                        to="/manage/hit"
                        className="link_back"
                        onClick={refresh}
                      >
                        <span className="ico_blog ico_back">
                          검색 전으로 돌아가기
                        </span>
                      </Link>
                    </h3>
                  )}
                  <ManageHitMenu
                    allChecked={allChecked}
                    changeAllChecked={changeAllChecked}
                    stateMenu={stateMenu}
                    setStateMenu={setStateMenu}
                    isChecked={isChecked}
                    hitSelect={hitSelect}
                  ></ManageHitMenu>
                  <div className="wrap_list">
                    <ul className="list_post list_post_type2">
                      {items !== null &&
                        items.map((item, index) => (
                          <ManageHitItems
                            key={index}
                            id={item.id}
                            title={item.title}
                            comment={item.comment}
                            created={item.created}
                            checked={item.checked}
                            changeChildChecked={changeChildChecked}
                            hitChangeState={hitChangeState}
                            // noticeDelete={noticeDelete}
                            // noticeChangeState={noticeChangeState}
                          ></ManageHitItems>
                        ))}
                    </ul>
                  </div>
                  {itemsCounting > 0 && (
                    <ManageHitPaging
                      itemsCounting={itemsCounting}
                    ></ManageHitPaging>
                  )}
                </>
              )}
            </>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageHit;
