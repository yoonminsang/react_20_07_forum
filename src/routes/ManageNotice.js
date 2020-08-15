import React from "react";
import "./stylesheets/Manage.css";
import { ManageMenu, MaNotice } from "../components";
import { ManageHeader, Footer } from "../containers";
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
