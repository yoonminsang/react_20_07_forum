import React from "react";
import "./stylesheets/AuSign.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useInput } from "../hooks";

const AuSignIn = ({ signInSuccess }) => {
  const history = useHistory();
  const emailMaxLen = (value) => value.length <= 40;
  const email = useInput("", emailMaxLen);
  const passwordMaxLen = (value) => value.length <= 20;
  const password = useInput("", passwordMaxLen);
  const signIn = (e) => {
    e.preventDefault();
    if (email.value === "") {
      alert("이메일을 입력하세요");
      return false;
    }
    if (password.value === "") {
      alert("비밀번호를 입력하세요");
      return false;
    }

    axios({
      method: "post",
      url: "/auth/signin_process",
      data: {
        email: email.value,
        password: password.value,
      },
    })
      .then(function (res) {
        if (res.data.user) {
          signInSuccess(res.data.user);
          history.push("/");
        } else {
          alert(res.data);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <>
      <div className="sign_form">
        <form onSubmit={signIn}>
          <h2>로그인</h2>
          <div>
            <input
              type="text"
              placeholder="email를 입력하세요."
              {...email}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요."
              {...password}
            ></input>
          </div>
          <input type="submit" value="로그인" className="btn_sign"></input>
        </form>

        <p className="sign_menu">
          <Link to="/auth/findId">아이디 찾기</Link>
          <span>|</span>
          <Link to="/auth/findPassword">비밀번호 찾기</Link>
          <span>|</span>
          <Link to="/auth/signup">회원가입</Link>
        </p>
      </div>
    </>
  );
};

export default AuSignIn;
