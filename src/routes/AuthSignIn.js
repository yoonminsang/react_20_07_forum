import React, { useState, useEffect } from "react";
import "./stylesheets/AuthSign.css";
import { Header, Footer } from "../components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useInput } from "../hooks";

const AuthSignIn = () => {
  useEffect(() => {
    document.title = "M's forum 로그인";
  }, []);
  const emailMaxLen = (value) => value.length <= 40;
  const email = useInput(emailMaxLen);
  const passwordMaxLen = (value) => value.length <= 20;
  const password = useInput(passwordMaxLen);
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
    const self = this;
    axios({
      method: "post",
      url: "/auth/signin_process",
      data: {
        email: email.value,
        password: password.value,
      },
    })
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <>
      <Header></Header>
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

        <p className="signMenu">
          <Link to="/auth/findId">아이디 찾기</Link>
          <span>|</span>
          <Link to="/auth/findPassword">비밀번호 찾기</Link>
          <span>|</span>
          <Link to="/auth/signup">회원가입</Link>
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AuthSignIn;
