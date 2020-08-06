import React, { useState, useEffect } from "react";
import "./stylesheets/MaCategory.css";
import axios from "axios";
import {
  MaCategory_Items,
  MaCategory_AddItem,
  MaCategory_ModifyItem,
} from "../components2";

const MaCategory = () => {
  const [loading, setLoading] = useState(true);
  const [originItems, setOriginItems] = useState(null);
  const [items, setItems] = useState(null);
  const [subject, setSubject] = useState(null);
  const [itemAdd, setItemAdd] = useState(false);
  const [itemModify, setItemModify] = useState(null);
  const [deleteItems, setDeleteItems] = useState([]);
  const [modifyItems, setModifyItems] = useState([]);

  useEffect(() => {
    axios
      .get("/manage/category")
      .then(function (res) {
        setOriginItems(res.data.category);
        setItems(res.data.category);
        setSubject(res.data.subject);
        setLoading(false);
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

  const categoryConfirm = (category_name, subject_id, subject_name) => (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { id: 0, category_name, subject_id, subject_name, counting: 0 },
    ]);
    setItemAdd(false);
  };

  const categoryModify = (index) => () => {
    setItemModify(index);
  };

  const categoryMCancle = () => {
    setItemModify(null);
  };

  const categoryMConfirm = (category_name, subject_id, subject_name, id) => (
    e
  ) => {
    e.preventDefault();
    setItems(
      items.map((item, index) =>
        itemModify === index
          ? { ...item, category_name, subject_id, subject_name }
          : item
      )
    );
    setItemModify(null);
    if (id !== 0) {
      setModifyItems([...modifyItems, id]);
    }
  };

  const categoryDelete = (index, id) => () => {
    setItems(items.slice(0, index).concat(items.slice(index + 1)));
    if (id !== 0) {
      setDeleteItems(deleteItems.concat([id]));
    }
  };

  const categorySave = () => {
    const filtered_deleteItems = deleteItems.sort((a, b) => {
      return a - b;
    });
    let filtered_modifyItems = [...new Set(modifyItems)].sort((a, b) => {
      return a - b;
    });
    //이 밑에 findindex해도 되는데 음... include해도돼
    for (let i = 0; i < filtered_deleteItems.length; i++) {
      for (let j = 0; j < filtered_modifyItems.length; j++) {
        if (filtered_deleteItems[i] === filtered_modifyItems[j]) {
          filtered_modifyItems.splice(j, 1);
          break;
        } else if (filtered_deleteItems[i] < filtered_modifyItems[j]) {
          break;
        }
      }
    }
    axios({
      method: "post",
      url: "/manage/category/process",
      data: {
        items,
        filtered_deleteItems,
        filtered_modifyItems,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          axios
            .get("/manage/category")
            .then(function (res) {
              setOriginItems(res.data.category);
              setItems(res.data.category);
              setItemAdd(false);
              setItemModify(null);
              setDeleteItems([]);
              setModifyItems([]);
            })
            .catch(function (err) {
              console.log(err);
            });
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
      {loading === false && (
        <>
          <h3 className="tit_cont">카테고리 관리</h3>
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
                      <div className="wrap_drag wrap_all">
                        <span className="ico_blog ico_drag ico_all"></span>
                      </div>
                      <span className="txt_name">전체 카테고리</span>
                    </div>
                  </div>
                </div>

                {items !== null &&
                  items.map((item, index) =>
                    itemModify !== index ? (
                      <MaCategory_Items
                        id={item.id}
                        index={index}
                        category_name={item.category_name}
                        subject_id={item.subject_id}
                        subject_name={item.subject_name}
                        counting={item.counting}
                        key={index}
                        categoryModify={categoryModify}
                        categoryDelete={categoryDelete}
                      />
                    ) : (
                      <MaCategory_ModifyItem
                        id={item.id}
                        index={index}
                        category_name={item.category_name}
                        subject_id={item.subject_id}
                        subject_name={item.subject_name}
                        key={index}
                        allSubject={subject}
                        categoryMConfirm={categoryMConfirm}
                        categoryMCancl={categoryMCancle}
                      />
                    )
                  )}

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

            <div className="set_btn">
              {JSON.stringify(originItems) === JSON.stringify(items) ? (
                <button className="btn_save btn_off" disabled>
                  변경사항 저장
                </button>
              ) : (
                <button className="btn_save" onClick={categorySave}>
                  변경사항 저장
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default MaCategory;
