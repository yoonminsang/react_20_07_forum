import React from "react";
import "./stylesheets/AuSign.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useInput } from "../hooks";

const AuthSignUp = ({ signInSuccess }) => {
  const history = useHistory();
  const emailMaxLen = (value) => value.length <= 40;
  const email = useInput("", emailMaxLen);
  const passwordMaxLen = (value) => value.length <= 20;
  const password = useInput("", passwordMaxLen);
  const password2 = useInput("", passwordMaxLen);
  const displayNameMaxLen = (value) => value.length <= 10;
  const displayName = useInput("", displayNameMaxLen);

  const signUp = (e) => {
    e.preventDefault();
    if (email.value === "") {
      alert("이메일을 입력하세요");
      return false;
    } else if (password.value === "") {
      alert("비밀번호를 입력하세요");
      return false;
    } else if (password2.value !== password.value) {
      alert("비밀번호를 입력하세요");
      return false;
    } else if (displayName.value === "") {
      alert("닉네임을 입력하세요");
      return false;
    }

    axios({
      method: "post",
      url: "/auth/signup_process",
      data: {
        email: email.value,
        password: password.value,
        displayName: displayName.value,
      },
    })
      .then(function (res) {
        if (res.data.user) {
          alert(res.data.user.displayName + "님 가입을 축하합니다");
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
        <form onSubmit={signUp}>
          <h2>회원가입</h2>
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
          <div>
            <input
              type="password"
              className="input"
              placeholder="비밀번호를 입력하세요"
              {...password2}
            ></input>
          </div>
          <div className="displayName">
            <input
              type="text"
              className="input"
              placeholder="닉네임을 입력하세요"
              {...displayName}
            ></input>
          </div>
          <input type="submit" value="회원가입" className="btn_sign"></input>
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

export default AuthSignUp;
