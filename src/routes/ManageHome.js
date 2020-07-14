import React, { useEffect } from "react";
import "./stylesheets/ManageHome.css";
import { ManageHeader, Footer, ManageMenu } from "../components";
const ManageHome = () => {
  useEffect(() => {
    document.title = "M's forum 관리자";
  }, []);
  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <div className="mArticle">홈</div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageHome;
