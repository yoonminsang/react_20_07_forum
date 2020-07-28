import React from "react";
import "./stylesheets/Manage.css";
import { ManageHeader, ManageMenu, MaCategory } from "../components";
import { Footer } from "../containers";
const ManageCategory = () => {
  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <div className="mArticle">
            <MaCategory></MaCategory>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageCategory;
