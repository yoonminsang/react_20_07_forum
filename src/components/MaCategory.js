import React, { useState, useEffect } from "react";
import "./stylesheets/Manage.css";
import axios from "axios";
import { MaCategory_Items, MaCategory_AddItem } from "../components2";

const MaCategory = () => {
  const [items, setItems] = useState(null);
  const [subject, setSubject] = useState(null);
  const [itemAdd, setItemAdd] = useState(false);
  // const []
  useEffect(() => {
    axios
      .get("/manage/category")
      .then(function (res) {
        setItems(res.data.category);
        setSubject(res.data.subject);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const categoryAdd = () => {
    setItemAdd(true);
  };

  const categoryCancle = () => {
    setItemAdd(false);
  };

  const categoryConfirm = (name, subject) => (e) => {
    e.preventDefault();
    console.log(name, subject);
    //이제 여기서 name,subject로 만들어야지
    setItemAdd(false);
  };

  const categoryModify = () => {};

  const categoryDelete = (index) => () => {
    items.splice(index, 1);
    setItems(items);
  };

  const categorySave = () => {};

  return (
    <>
      <div className="mArticle">
        <h3>카테고리 관리</h3>
        <div className="wrap_set">
          <strong className="st_desc">
            변경사항 저장을 눌러야 저장됩니다.
          </strong>
          <p className="desc">주제 연결을 설정할 수 있습니다.</p>
          <div className="set_order">
            <div className="list_order">
              <div className="bundle_item">
                <div className="item_order">
                  <div className="basic_item">
                    <div className="wrap_drag">
                      <img src="/img/category.png" alt="category"></img>
                    </div>
                    <span className="txt_name">전체 카테고리</span>
                  </div>
                </div>
              </div>

              {items !== null &&
                items.map((item, index) => (
                  <MaCategory_Items
                    index={index}
                    name={item.name}
                    subject_id={item.subject_id}
                    subject_name={item.subject_name}
                    counting={item.counting}
                    key={index}
                    categoryDelete={categoryDelete}
                  />
                ))}

              {itemAdd === true && (
                <MaCategory_AddItem
                  allSubject={subject}
                  categoryCancle={categoryCancle}
                  categoryConfirm={categoryConfirm}
                ></MaCategory_AddItem>
              )}
            </div>
            <button className="btn_wrap_add" onClick={categoryAdd}>
              카테고리 추가
            </button>
          </div>

          <div className="btn_set">
            <button className="btn_save">변경사항 저장</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaCategory;
