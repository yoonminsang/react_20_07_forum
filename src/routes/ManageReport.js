import React from "react";
import "./stylesheets/Manage.css";
import { ManageMenu } from "../components";

import { ManageHeader, Footer } from "../containers";
const ManageReport = () => {
  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <div className="mArticle"></div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageReport;
