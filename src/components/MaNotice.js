import React, { useState, useEffect } from "react";
import "./stylesheets/MaNotice.css";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import axios from "axios";
import { MaNotice_Menu, MaNotice_Items, MaNotice_Paging } from "../components2";

const MaNotice = () => {
  const location = useLocation();
  const match = useRouteMatch();
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

  const noticeSelectDelete = () => {
    const selectId = items
      .filter((item) => item.checked === true)
      .map((item) => item.id);
    axios({
      method: "post",
      url: "/manage/notice/select_delete_process",
      data: {
        selectId,
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

  const noticeSelectChangeState = (e) => {
    const value = e.target.value;
    const id = items
      .filter((item) => item.checked === true)
      .map((item) => item.id);
    axios({
      method: "post",
      url: "/manage/notice/select_status_process",
      data: {
        id: id.join(),
        status: value,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          setStateMenu(false);
          setItems(
            items.map((item) =>
              item.checked === true
                ? { ...item, checked: false, status: value }
                : { ...item, checked: false }
            )
          );
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
        setItems(res.data.notice_post);
        setItemsCounting(res.data.notice_counting.counting);
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

  const noticeDelete = (id) => () => {
    axios({
      method: "post",
      url: "/manage/notice/delete_process",
      data: {
        id,
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

  const noticeChangeState = (e, id, index) => {
    const value = e.target.value;
    if (value !== items[index].status) {
      axios({
        method: "post",
        url: "/manage/notice/status_process",
        data: {
          id,
          status: value,
        },
      })
        .then(function (res) {
          if (res.data.process) {
            setItems(
              items.map((item) =>
                item.id === id ? { ...item, status: value } : item
              )
            );
          } else {
            alert("오류 발생");
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  return (
    <>
      {loading === false && (
        <>
          {match.params.Keyword === undefined ? (
            <h3 className="tit_cont">
              공지 관리<span className="txt_count">{itemsCounting}</span>
            </h3>
          ) : (
            <h3 className="tit_cont">
              <span className="txt_result">'{match.params.Keyword}'</span> 검색
              결과
              <span className="txt_count">{itemsCounting}</span>
              <Link to="/manage/notice" className="link_back" onClick={refresh}>
                <span className="ico_blog ico_back">검색 전으로 돌아가기</span>
              </Link>
            </h3>
          )}

          <MaNotice_Menu
            allChecked={allChecked}
            changeAllChecked={changeAllChecked}
            stateMenu={stateMenu}
            setStateMenu={setStateMenu}
            isChecked={isChecked}
            noticeSelectDelete={noticeSelectDelete}
            noticeSelectChangeState={noticeSelectChangeState}
          ></MaNotice_Menu>
          <div className="wrap_list">
            <ul className="list_post list_post_type2">
              {items !== null &&
                items.map((item, index) => (
                  <MaNotice_Items
                    key={index}
                    index={index}
                    id={item.id}
                    title={item.title}
                    status={item.status}
                    comment={item.comment}
                    created={item.created}
                    checked={item.checked}
                    changeChildChecked={changeChildChecked}
                    noticeDelete={noticeDelete}
                    noticeChangeState={noticeChangeState}
                  ></MaNotice_Items>
                ))}
            </ul>
          </div>
          {itemsCounting > 0 && (
            <MaNotice_Paging itemsCounting={itemsCounting}></MaNotice_Paging>
          )}
        </>
      )}
    </>
  );
};
export default MaNotice;
