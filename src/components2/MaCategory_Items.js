import React from "react";
import { Link } from "react-router-dom";

const MaCategory_Items = ({
  index,
  name,
  subject_id,
  subject_name,
  counting,
  categoryDelete,
}) => {
  return (
    <>
      <div className="bundle_item">
        <div className="item_order">
          <div className="basic_item">
            <div className="wrap_drag">
              <img src="/img/category.png" alt="category"></img>
            </div>
            <div style={{ display: "inline" }}>
              <div className="wrap_name">
                <span className="txt_name">{name}</span>
                <span className="txt_count">({counting})</span>
              </div>
              <span className="txt_cate">{subject_name}</span>
              <div className="info_btn">
                <Link to="#" className="btn_post">
                  수정
                </Link>
                <Link
                  to="#"
                  className="btn_post"
                  onClick={categoryDelete(index)}
                >
                  삭제
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaCategory_Items;
