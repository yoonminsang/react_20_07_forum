import React, { useState } from "react";
import { Link } from "react-router-dom";

const MaNotice_Paging = ({ itemsCounting }) => {
  console.log(Math.ceil(itemsCounting / 15));
  let pagination = [];

  return (
    <>
      <div className="wrap_paging">
        <strong className="screenout">현재 1페이지</strong>
        <Link to="" className="link_paging">
          <span className="ico_blog ico_prev"></span>
        </Link>
        <ul className="list_paging">
          {/*           
          <li>
            <a className="link_num">1</a>
          </li> */}
        </ul>
        <Link to="" className="link_paging">
          <span className="ico_blog ico_next"></span>
        </Link>
      </div>
    </>
  );
};
export default MaNotice_Paging;
