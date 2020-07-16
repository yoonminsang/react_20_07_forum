import React from "react";
import "./stylesheets/Manage.css";
import { Link } from "react-router-dom";

const MaCategory = () => {
  const categoryAdd = () => {};
  const categoryModify = () => {};
  const categoryDelete = () => {};
  return (
    <>
      <div className="mArticle">
        <h3>카테고리 관리</h3>
        <div className="wrap_set">
          <strong className="st_desc">
            카테고리 순서를 변경하고 주제 연결을 설정할 수 있습니다.
          </strong>
          <p className="desc">
            드래그 앤 드롭으로 카테고리 순서를 변경할 수 있습니다.
          </p>
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

              <div className="bundle_item">
                <div className="item_order">
                  <div className="basic_item">
                    <div className="wrap_drag">
                      <img src="/img/category.png" alt="category"></img>
                    </div>
                    <div style={{ display: "inline" }}>
                      <div className="wrap_name">
                        <span className="txt_name">파스타</span>
                        <span className="txt_count">(20)</span>
                      </div>
                      <span className="txt_cate">음식</span>
                      <div className="btn_info">
                        <Link to="#" className="btn_post">
                          수정
                        </Link>
                        <Link to="#" className="btn_post">
                          삭제
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bundle_item">
                <div className="item_order">
                  <div className="basic_item">
                    <div className="wrap_drag">
                      <img src="/img/category.png" alt="category"></img>
                    </div>
                    <div style={{ display: "inline" }}>
                      <div className="wrap_name">
                        <span className="txt_name">파스타</span>
                        <span className="txt_count">(20)</span>
                      </div>
                      <span className="txt_cate">음식</span>
                      <div className="btn_info">
                        <Link to="#" className="btn_post">
                          수정
                        </Link>
                        <Link to="#" className="btn_post">
                          삭제
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn_wrap_add">카테고리 추가</button>
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
