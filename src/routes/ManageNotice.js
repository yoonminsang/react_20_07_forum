import React from "react";
import "./stylesheets/Manage.css";
import { ManageHeader, ManageMenu, MaNotice } from "../components";
import { Footer } from "../containers";
const ManageCategory = () => {
  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <div className="mArticle">
            <MaNotice></MaNotice>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageCategory;
