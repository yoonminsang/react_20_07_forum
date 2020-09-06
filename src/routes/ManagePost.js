import "./stylesheets/Manage.css";
import {
  ManageMenu,
  ManagePostMenu,
  ManagePostItems,
  ManagePostPaging,
} from "../components";
import React, { useState, useEffect } from "react";
import "../components/stylesheets/MaNotice.css";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

import { ManageHeader, Footer } from "../containers";
const ManagePost = () => {
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

  const postSelectDelete = () => {
    const id = items
      .filter((item) => item.checked === true)
      .map((item) => item.id)
      .join();
    const category_id = items
      .filter((item) => item.checked === true)
      .map((item) => item.category_id);
    // .join();

    // console.log(id);
    // console.log(category_id);
    // console.log("delelel");
    // category_id.sort((a, b) => {
    //   return a - b;
    // });
    // let obj = [];
    // for (let i = 0; i < category_id.length; i++) {
    //   if (obj.length === 0) {
    //     console.log("0일때");
    //     let temp = {};
    //     temp[category_id[0]] = 1;
    //     obj.push(temp);
    //     console.log(temp);
    //     console.log(obj[0]);
    //     console.log(obj);
    //   } else if (Object.keys(obj[obj.length - 1])[0] == category_id[i]) {
    //     console.log("키가 같을때");
    //     obj[obj.length - 1].i = obj[obj.length - 1][i] + 1;
    //   } else {
    //     console.log("else");
    //     let temp = {};
    //     temp[category_id[i]] = 1;
    //     obj.push(temp);
    //   }
    //   console.log("obj", i, obj);
    // }
    // console.log("마지막", obj);

    axios({
      method: "post",
      url: "/manage/post/delete_process",
      data: {
        id,
        category_id,
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
  const [subject, setSubject] = useState(null);
  const [subjectCategory, setSubjectCategory] = useState(null);

  const refresh = () => {
    axios
      .get(location.pathname)
      .then(function (res) {
        setItems(res.data.category_post);
        setItemsCounting(res.data.counting);
        setSubject(res.data.subject);
        setSubjectCategory(res.data.subject_category);
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

  const postDelete = (id, category_id) => {
    axios({
      method: "post",
      url: "/manage/post/delete_process",
      data: {
        id,
        category_id,
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
                      전체 글 관리
                      <span className="txt_count">{itemsCounting}</span>
                    </h3>
                  ) : (
                    <h3 className="tit_cont">
                      <span className="txt_result">'{params.Keyword}'</span>
                      검색 결과
                      <span className="txt_count">{itemsCounting}</span>
                      <Link
                        to="/manage/post"
                        className="link_back"
                        onClick={refresh}
                      >
                        <span className="ico_blog ico_back">
                          검색 전으로 돌아가기
                        </span>
                      </Link>
                    </h3>
                  )}
                  <ManagePostMenu
                    allChecked={allChecked}
                    changeAllChecked={changeAllChecked}
                    stateMenu={stateMenu}
                    setStateMenu={setStateMenu}
                    isChecked={isChecked}
                    postSelectDelete={postSelectDelete}
                    subject={subject}
                    subjectCategory={subjectCategory}
                  ></ManagePostMenu>
                  <div className="wrap_list">
                    <ul className="list_post list_post_type2">
                      {items !== null &&
                        items.map((item, index) => (
                          <ManagePostItems
                            key={index}
                            id={item.id}
                            category_id={item.category_id}
                            title={item.title}
                            comment={item.comment}
                            hit={item.hit}
                            good={item.good}
                            report={item.report}
                            bad={item.bad}
                            created={item.created}
                            checked={item.checked}
                            changeChildChecked={changeChildChecked}
                            postDelete={postDelete}
                            name={item.name}
                            displayName={item.displayName}
                          ></ManagePostItems>
                        ))}
                    </ul>
                  </div>
                  {itemsCounting > 0 && (
                    <ManagePostPaging
                      itemsCounting={itemsCounting}
                    ></ManagePostPaging>
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

export default ManagePost;
