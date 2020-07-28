import React from "react";
import { Link } from "react-router-dom";

const MaCategory_Items = ({
  id,
  index,
  category_name,
  subject_id,
  subject_name,
  counting,
  categoryModify,
  categoryDelete,
}) => {
  return (
    <>
      <div className="bundle_item">
        <div className="item_order">
          <div className="basic_item">
            <div className="wrap_drag">
              <span className="ico_blog ico_drag"></span>
            </div>
            <div style={{ display: "inline" }}>
              <div className="wrap_name">
                <span className="txt_name">{category_name}</span>
                <span className="txt_count">({counting})</span>
              </div>
              <span id={subject_id} className="txt_cate">
                {subject_name}
              </span>
              <div className="info_btn">
                <Link
                  to="#"
                  className="btn_post"
                  onClick={categoryModify(index)}
                >
                  수정
                </Link>
                <Link
                  to="#"
                  className="btn_post"
                  onClick={categoryDelete(index, id)}
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
