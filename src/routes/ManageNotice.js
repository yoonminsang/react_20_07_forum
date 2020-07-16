import React, { useEffect } from "react";
import "./stylesheets/Manage.css";
import { ManageHeader, ManageMenu } from "../components";
import { Footer } from "../containers";

const ManageNotice = () => {
  useEffect(() => {
    document.title = "M's forum 관리자 공지";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mManage">
        <ManageHeader></ManageHeader>
        <div className="mContent">
          <ManageMenu></ManageMenu>
          <div className="mArticle">공지</div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ManageNotice;
