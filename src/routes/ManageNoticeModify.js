import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import ReactQuillImageUploader, {
  saveImageSrc,
} from "react-quill-image-uploader";
import axios from "axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import "./stylesheets/Manage.css";
import "./stylesheets/ManageNoticeWriting.css";
import "react-quill/dist/quill.snow.css";
import { ManageHeader, Footer } from "../containers";
import { useInput } from "../hooks";
const ManageNoticeModify = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const [noticeTitle, setNoticeTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("visible"); //hidden
  const [statusHan, setStatusHan] = useState("공개"); //비공개

  useEffect(() => {
    axios
      .get(location.pathname)
      .then(function (res) {
        if (res.data === false) {
          alert("자격이 없습니다.");
          history.goBack();
        }
        setNoticeTitle(res.data.notice.title);
        setContent(res.data.notice.content);
        if (res.data.notice.status === "visible") {
          setStatus("visible");
          setStatusHan("공개");
        } else {
          setStatus("hidden");
          setStatusHan("비공개");
        }
        // setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  // console.log(title);

  const [menu, setMenu] = useState(false);
  const changeMenu = () => {
    menu === true ? setMenu(false) : setMenu(true);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      ["blockquote"],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }, { direction: "rtl" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "background",
    "bold",
    "color",
    "italic",
    "link",
    "strike",
    "underline",
    "blockquote",
    "header",
    "indent",
    "list",
    "align",
    "direction",
    "image",
    "video",
  ];

  const cancle = (e) => {
    e.preventDefault();
    const check = window.confirm("변경사항이 저장되지 않습니다.");
    if (check) {
      history.goBack();
    }
  };

  const register = (e) => {
    e.preventDefault();
    if (noticeTitle.value === "") {
      alert("제목을 입력하세요");
      return;
    }
    axios({
      method: "post",
      url: "/manage/notice/modify_process",
      data: {
        postId: params.postId,
        title: noticeTitle,
        content,
        status,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          history.push("/manage/notice");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <>
      {/* <div className="mManage"> */}
      <ManageHeader></ManageHeader>
      <div className="container width1160 listwrap clear">
        <div className="btn-category" role="button">
          <div
            className={
              menu === true
                ? "mce-widget mce-btn mce-opened"
                : "mce-widget mce-btn"
            }
            role="button"
          >
            <button type="button" onClick={changeMenu}>
              <i className="mce-txt">{statusHan}</i>
              <i className="mce-caret">더보기</i>
            </button>
          </div>
        </div>
        {menu === true && (
          <div className="mce-container mce-panel mce-floatpanel mce-menu mce-animate mce-fixed mce-menu-align mce-in">
            <div className="mce-container-body mce-stack-layout">
              <div
                className="mce-menu-item mce-menu-item-normal mce-stack-layout-item"
                onClick={() => {
                  setStatus("visible");
                  setStatusHan("공개");
                  setMenu(false);
                }}
              >
                <span className="mce-text">공개</span>
              </div>
              <div
                className="mce-menu-item mce-menu-item-normal mce-stack-layout-item"
                onClick={() => {
                  setStatus("hidden");
                  setStatusHan("비공개");
                  setMenu(false);
                }}
              >
                <span className="mce-text">비공개</span>
              </div>
            </div>
          </div>
        )}

        <div className="input_box input_write_tit">
          <label className="txt_placeholder"></label>
          <input
            type="text"
            className="put_inquiry"
            placeholder="제목을 입력하세요"
            value={noticeTitle}
            onChange={(e) => setNoticeTitle(e.target.value)}
          ></input>
        </div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="내용을 입력하세요"
          value={content}
          onChange={setContent}
        />
        <div className="btn_box write fr">
          <form>
            <button type="reset" className="btn_grey cancle" onClick={cancle}>
              취소
            </button>
            <button
              type="submit"
              className="btn_blue btn_svc write"
              onClick={register}
            >
              등록
            </button>
          </form>
        </div>
        <Footer></Footer>
      </div>
      {/* </div> */}
    </>
  );
};

export default ManageNoticeModify;
