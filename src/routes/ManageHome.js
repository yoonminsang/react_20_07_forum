import React from "react";
import "./stylesheets/Manage.css";
import { ManageMenu, MaHome } from "../components";

import { ManageHeader, Footer } from "../containers";
const ManageHome = () => {
  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <div className="mArticle">
            <MaHome></MaHome>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageHome;
