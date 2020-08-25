import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactQuillImageUploader, {
  saveImageSrc,
} from "react-quill-image-uploader";
import axios from "axios";
import { Header, Footer, Menu } from "../containers";
import {
  // Menu,
  BoardTitle,
} from "../components";
import { useLocation, useHistory, useParams } from "react-router-dom";
import "./stylesheets/Write.css";

const Modify = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const history = useHistory();
  const params = useParams();
  const [title, setTitle] = useState(null);
  useEffect(() => {
    axios
      .get(location.pathname)
      .then(function (res) {
        if (res.data === false) {
          alert("자격이 없습니다.");
          history.goBack();
        }
        setTitle(res.data.title);
        setPostTitle(res.data.post.title);
        setContent(res.data.post.content);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");
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
    if (postTitle.value === "") {
      alert("제목을 입력하세요");
      return;
    }
    axios({
      method: "post",
      url: `/forum/${params.category}/modify_process`,
      data: {
        postId: params.postId,
        title: postTitle,
        content,
      },
    })
      .then(function (res) {
        if (res.data.process) {
          history.push(`/forum/${params.category}`);
        } else {
          alert("로그인을 확인해주세요");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      {loading === false && (
        <>
          <Header></Header>
          <Menu></Menu>
          <div className="container width1160 listwrap clear">
            <BoardTitle title={title}></BoardTitle>
            <div className="input_box input_write_tit">
              <label className="txt_placeholder"></label>
              <input
                type="text"
                className="put_inquiry"
                placeholder="제목을 입력하세요"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                maxLength="40"
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
                <button
                  type="reset"
                  className="btn_grey cancle"
                  onClick={cancle}
                >
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
          </div>
          <Footer></Footer>
        </>
      )}
    </>
  );
};
export default Modify;
