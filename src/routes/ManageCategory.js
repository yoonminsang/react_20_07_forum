import React from "react";
import "./stylesheets/Manage.css";
import { ManageMenu, MaCategory } from "../components";
import { ManageHeader, Footer } from "../containers";
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
